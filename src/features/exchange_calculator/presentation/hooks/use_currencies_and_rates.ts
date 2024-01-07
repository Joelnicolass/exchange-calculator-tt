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
import { Rate } from "../../domain/entities/rate/rate.entity";

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
 *   - sanitizeCurrencies: A function to remove currencies that do not have exchange rates.
 */
export const useCurrenciesAndRates = () => {
  const INITIAL_STATE_CURRENCY = new Map<string, Currency>();

  const { handler: handleCurrencies, isLoading: isCurrenciesLoading } =
    useHandleApiResponse();

  const { handler: handleExchangeRates, isLoading: isExchangeRatesLoading } =
    useHandleApiResponse();

  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    INITIAL_STATE_CURRENCY
  );
  const [rates, setRates] = useState<Map<Currency["id"], number>>();
  const [lastUpdated, setLastUpdated] = useState<Date>();

  const _deleteCurrenciesWithoutRates = (
    currencies: Map<string, Currency>,
    rates: Map<Currency["id"], number>
  ) => {
    const currenciesWithRates = new Map<string, Currency>();

    rates.forEach((_, key) => {
      const currency = currencies.get(key);
      if (currency) currenciesWithRates.set(key, currency);
    });

    return currenciesWithRates;
  };

  const getCurrencies = async () =>
    await handleCurrencies(
      () => currencyUseCases.getCurrencies.execute(),
      (data) => setCurrencies(data),
      () => showToast(ToastType.ERROR, ERROR_MESSAGE_CURRENCY)
    );

  const getRatesByBaseCurrency = async (baseCurrency: Currency) =>
    await handleExchangeRates(
      () => currencyUseCases.getRatesByBaseCurrency.execute(baseCurrency),
      (data) => {
        setRates(data.rates);
        setLastUpdated(data.date);

        if (currencies.size > 0) sanitizeCurrencies(currencies, data.rates);
      },
      () => showToast(ToastType.ERROR, ERROR_MESSAGE_EXCHANGE_RATE)
    );

  const sanitizeCurrencies = (
    currencies: Map<string, Currency>,
    rates: Map<Currency["id"], number>
  ) => {
    const newList = _deleteCurrenciesWithoutRates(currencies, rates);

    setCurrencies(newList);
  };

  useEffect(() => {
    const init = async () => {
      const currencies = (await getCurrencies()) as Map<string, Currency>;

      const rate = (await getRatesByBaseCurrency(
        currencies.get(INITIAL_STATE_FROM)!
      )) as Rate;

      sanitizeCurrencies(currencies, rate.rates);
    };

    init();
  }, []);

  return {
    rates,
    currencies,
    lastUpdated,
    isCurrenciesLoading,
    isExchangeRatesLoading,
    getCurrencies,
    sanitizeCurrencies,
    getRatesByBaseCurrency,
  };
};
