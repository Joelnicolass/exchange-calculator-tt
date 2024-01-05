import { useEffect, useState } from "react";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { currencyUseCases } from "../../infrastructure/usecases/currency.usecases_impl";
import { useHandleApiResponse } from "../../../../common/presentation/hooks/use_handle_api_response/use_handle_api_response";
import { showToast } from "../../../../common/utils";
import { ToastType } from "../../../../common/domain/types";

/**
 * Hook that provides a view model for the exchange calculator.
 * The view model contains state variables and functions to handle currency conversion.
 *
 * @returns The calculator view model object.
 */
export const useCalculatorViewModel = () => {
  const INITIAL_STATE_CURRENCY = new Map<string, Currency>();
  const INITIAL_STATE_FROM = "USD";
  const INITIAL_STATE_TO = "EUR";
  const INITIAL_STATE_AMOUNT = "1.00";
  const ERROR_MESSAGE_CURRENCY =
    "Oops, it seems that the currencies are not available at the moment. 😔";
  const ERROR_MESSAGE_EXCHANGE_RATE =
    "Oops, it seems that this exchange rate is not available at the moment. 😔";

  const { handler: handleApiResponse, isLoading } = useHandleApiResponse();

  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    INITIAL_STATE_CURRENCY
  );
  const [rates, setRates] = useState<Map<Currency["id"], number>>();
  const [lastUpdated, setLastUpdated] = useState<Date>();
  const [fromCurrency, setFromCurrency] = useState<string>(INITIAL_STATE_FROM);
  const [toCurrency, setToCurrency] = useState<string>(INITIAL_STATE_TO);
  const [amount, setAmount] = useState<string>(INITIAL_STATE_AMOUNT);

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
      await getRatesByBaseCurrency(currencies.get(fromCurrency)!);
    };

    init();
  }, []);

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = event.target.value;
    const currency = currencies.get(id);
    getRatesByBaseCurrency(currency!);
    setFromCurrency(id);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = event.target.value;
    setToCurrency(id);
  };

  const invertCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    getRatesByBaseCurrency(currencies.get(toCurrency)!);
  };

  return {
    currencies,
    rates,
    lastUpdated,
    isLoading,
    fromCurrency,
    toCurrency,
    amount,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    setAmount,
    invertCurrencies,
  };
};
