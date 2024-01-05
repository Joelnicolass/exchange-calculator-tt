import { useEffect, useState } from "react";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { currencyUseCases } from "../../infrastructure/usecases/currency.usecases_impl";
import { useHandleApiResponse } from "../../../../common/presentation/hooks/use_handle_api_response/use_handle_api_response";
import { showToast } from "../../../../common/utils";
import { ToastType } from "../../../../common/domain/types";

export const useCalculatorViewModel = () => {
  const INITIAL_STATE_CURRENCY = new Map<string, Currency>();
  const INITIAL_STATE_FROM = "USD";
  const INITIAL_STATE_TO = "EUR";
  const INITIAL_STATE_AMOUNT = "1.00";

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
      (error) => showToast(ToastType.ERROR, error.message)
    );

  const getRatesByBaseCurrency = async (baseCurrency: Currency) => {
    await handleApiResponse(
      () => currencyUseCases.getRatesByBaseCurrency.execute(baseCurrency),
      (data) => {
        setRates(data.rates);
        setLastUpdated(data.date);
      },
      (error) => showToast(ToastType.ERROR, error.message)
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

  // TODO! Mover a un usecase
  const calculate = () => {
    if (!rates) return;
    const rate = rates.get(toCurrency);

    if (!rate) return;
    if (isNaN(Number(amount))) return;

    return Number(amount) * rate;
  };

  // TODO! Mover a un usecase
  const calculateInverted = () => {
    if (amount && rates) return Number(amount) / rates.get(toCurrency)!;

    return "";
  };

  // TODO! crear un solo handler
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

  const fromText = `${amount} ${currencies.get(fromCurrency)?.name} =`;

  const toText = `${calculate()} ${currencies.get(toCurrency)?.name}`;

  return {
    currencies,
    rates,
    lastUpdated,
    isLoading,
    fromCurrency,
    toCurrency,
    amount,
    fromText,
    toText,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    setAmount,
    calculate,
    calculateInverted,
    invertCurrencies,
  };
};
