import { useEffect, useState } from "react";
import { useHandleApiResponse } from "../../../../common/presentation/hooks/use_handle_api_response/use_handle_api_response";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { currencyUseCases } from "../../infrastructure/usecases/currency.usecases_impl";
import { showToast } from "../../../../common/utils";
import { ToastType } from "../../../../common/domain/types";
import {
  ERROR_MESSAGE_CURRENCY,
  ERROR_MESSAGE_EXCHANGE_RATE,
  INITIAL_STATE_FROM,
} from "../constants";

/**
 * Custom hook that provides currencies, exchange rates, and related functions.
 *
 * @returns An object containing the following properties:
 *   - rates: A map of exchange rates, where the key is the currency ID and the value is the exchange rate.
 *   - currencies: A map of currencies, where the key is the currency ID and the value is the currency object.
 *   - lastUpdated: The date when the exchange rates were last updated.
 *   - isLoading: A boolean indicating whether the data is currently being loaded.
 *   - getCurrencies: A function to fetch the list of currencies.
 *   - getRatesByBaseCurrency: A function to fetch the exchange rates based on a given base currency.
 */
export const useCurrenciesAndRates = () => {
  const INITIAL_STATE_CURRENCY = new Map<string, Currency>();

  const { handler: handleApiResponse, isLoading } = useHandleApiResponse();

  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    INITIAL_STATE_CURRENCY
  );
  const [rates, setRates] = useState<Map<Currency["id"], number>>();
  const [lastUpdated, setLastUpdated] = useState<Date>();

  const getCurrencies = async () =>
    await handleApiResponse(
      () => currencyUseCases.getCurrencies.execute(),
      (data) => setCurrencies(data),
      () => showToast(ToastType.ERROR, ERROR_MESSAGE_CURRENCY)
    );

  const getRatesByBaseCurrency = async (baseCurrency: Currency) => {
    await handleApiResponse(
      () => currencyUseCases.getRatesByBaseCurrency.execute(baseCurrency),
      (data) => {
        setRates(data.rates);
        setLastUpdated(data.date);
      },
      () => showToast(ToastType.ERROR, ERROR_MESSAGE_EXCHANGE_RATE)
    );
  };

  useEffect(() => {
    const init = async () => {
      const currencies = await getCurrencies();
      if (currencies instanceof Error) return;
      await getRatesByBaseCurrency(currencies.get(INITIAL_STATE_FROM)!);
    };

    init();
  }, []);

  return {
    rates,
    currencies,
    lastUpdated,
    isLoading,
    getCurrencies,
    getRatesByBaseCurrency,
  };
};
