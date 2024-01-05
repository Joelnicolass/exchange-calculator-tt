import { useEffect, useState } from "react";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { currencyUseCases } from "../../infrastructure/usecases/currency.usecases_impl";

export const useCalculatorViewModel = () => {
  const INITIAL_STATE_CURRENCY = new Map<string, Currency>();
  const INITIAL_STATE_FROM = "USD";
  const INITIAL_STATE_TO = "EUR";
  const INITIAL_STATE_AMOUNT = "1.00";

  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    INITIAL_STATE_CURRENCY
  );
  const [rates, setRates] = useState<Map<Currency["id"], number>>();
  const [lastUpdated, setLastUpdated] = useState<Date>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fromCurrency, setFromCurrency] = useState<string>(INITIAL_STATE_FROM);
  const [toCurrency, setToCurrency] = useState<string>(INITIAL_STATE_TO);
  const [amount, setAmount] = useState<string>(INITIAL_STATE_AMOUNT);

  useEffect(() => {
    const getRatesByBaseCurrency = async (baseCurrency: Currency) => {
      const response = await currencyUseCases.getRatesByBaseCurrency.execute(
        baseCurrency
      );

      const hasError = response.isLeft();
      if (hasError) {
        console.log(response.value);
        return;
      }

      setRates(response.value.rates);
      setLastUpdated(response.value.date);
    };

    const getCurrencies = async () => {
      setIsLoading(true);

      const response = await currencyUseCases.getCurrencies.execute();

      const hasError = response.isLeft();
      if (hasError) {
        console.log(response.value);
        return;
      }

      setCurrencies(response.value);
      await getRatesByBaseCurrency(response.value.get(fromCurrency)!);

      setIsLoading(false);
    };

    getCurrencies();
  }, [fromCurrency]);

  const calculate = () => {
    if (!rates) return;
    const rate = rates.get(toCurrency);

    if (!rate) return;
    if (isNaN(Number(amount))) return;

    return Number(amount) * rate;
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setFromCurrency(event.target.value);

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setToCurrency(event.target.value);

  const invertCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
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
    calculate,
    invertCurrencies,
  };
};
