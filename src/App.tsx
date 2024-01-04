import React, { useEffect, useState } from "react";
import { currencyUseCases } from "./features/calculator/infrastructure/usecases/currency.usecases_impl";
import { Currency } from "./features/calculator/domain/entities/currency/currency.entity";
import { mapToArr } from "./common/utils";

const App = () => {
  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    new Map()
  );

  const [fromCurrency, setFromCurrency] = useState<string>("USD");

  const [toCurrency, setToCurrency] = useState<string>("EUR");

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setFromCurrency(event.target.value);

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => setToCurrency(event.target.value);

  const [rates, setRates] = useState<Map<Currency["id"], number>>();

  useEffect(() => {
    const getRatesByBaseCurrency = async (baseCurrency: Currency) => {
      (
        await currencyUseCases.getRatesByBaseCurrency.execute(baseCurrency)
      ).fold(
        (error) => console.log(error),
        (response) => setRates(response.rates)
      );
    };

    const getCurrencies = async () => {
      (await currencyUseCases.getCurrencies.execute()).fold(
        (error) => console.log(error),
        (response) => {
          setCurrencies(response);
          getRatesByBaseCurrency(response.get(fromCurrency)!);
        }
      );
    };

    getCurrencies();
  }, [fromCurrency]);

  const [amount, setAmount] = useState<number>(1);

  const calculate = () => {
    if (!rates) return 0;
    const rate = rates.get(toCurrency);

    if (!rate) return 0;
    return amount * rate;
  };

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
    "
    >
      <select
        className="
            border
            border-gray-300
            rounded
            px-4
            py-2
          "
        value={fromCurrency}
        onChange={handleFromCurrencyChange}
      >
        {mapToArr(currencies).map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>

      <select
        className="
            border
            border-gray-300
            rounded
            px-4
            py-2
          "
        value={toCurrency}
        onChange={handleToCurrencyChange}
      >
        {mapToArr(currencies).map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>

      <button
        className="
            border
            border-gray-300
            rounded
            px-4
            py-2
          "
        onClick={() => {
          const aux = fromCurrency;
          setFromCurrency(toCurrency);
          setToCurrency(aux);
        }}
      >
        intercambiar
      </button>

      <input
        className="
            border
            border-gray-300
            rounded
            px-4
            py-2
          "
        type="number"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
      />

      <h2>Total: {calculate()}</h2>
    </div>
  );
};

export default App;
