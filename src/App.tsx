import React, { useEffect, useState } from "react";
import { currencyUseCases } from "./features/calculator/infrastructure/usecases/currency.usecases_impl";
import { Currency } from "./features/calculator/domain/entities/currency/currency.entity";
import { mapToArr } from "./common/utils";
import AppCurrencyInput from "./common/presentation/components/app_currency_input/app_currency_input";
import AppSelect from "./common/presentation/components/app_select/app_select";

const formatDate = (date: Date): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${year}, ${hour}:${minutes} UTC`;
};

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

  const [lastUpdated, setLastUpdated] = useState<Date>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRatesByBaseCurrency = async (baseCurrency: Currency) => {
      (
        await currencyUseCases.getRatesByBaseCurrency.execute(baseCurrency)
      ).fold(
        (error) => console.log(error),
        (response) => {
          setRates(response.rates);
          setLastUpdated(response.date);
        }
      );
    };

    const getCurrencies = async () => {
      setIsLoading(true);

      (await currencyUseCases.getCurrencies.execute()).fold(
        (error) => console.log(error),
        async (response) => {
          setCurrencies(response);
          await getRatesByBaseCurrency(response.get(fromCurrency)!);

          setIsLoading(false);
        }
      );
    };

    getCurrencies();
  }, [fromCurrency]);

  const [amount, setAmount] = useState<string>("1.00");

  const calculate = () => {
    if (!rates) return;
    const rate = rates.get(toCurrency);

    if (!rate) return;
    if (isNaN(Number(amount))) return;

    return Number(amount) * rate;
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
      <div
        className="
        flex
        items-center
        flex-wrap
        justify-center
        space-x-4
        mb-4
        "
      >
        <AppSelect
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          options={mapToArr(currencies)}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            ))
          }
        />
        <AppSelect
          value={toCurrency}
          onChange={handleToCurrencyChange}
          options={mapToArr(currencies)}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            ))
          }
        />
      </div>

      <button
        className="
        border
        border-gray-300
        rounded
        px-4
        py-2
        "
        onClick={() => {
          setFromCurrency(toCurrency);
          setToCurrency(fromCurrency);
        }}
      >
        intercambiar
      </button>

      <AppCurrencyInput
        prefix={`${currencies.get(fromCurrency)?.symbol} `}
        placeholder={`${currencies.get(fromCurrency)?.symbol} 0.00`}
        defaultValue={amount}
        decimalsLimit={2}
        value={amount}
        onValueChange={(value) => setAmount(value!)}
      />

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>
          {" "}
          {currencies.get(toCurrency)?.symbol} {calculate()}
        </h2>
      )}

      <p>
        Last updated:{" "}
        {lastUpdated ? formatDate(lastUpdated) : "No data available"}
      </p>
    </div>
  );
};

export default App;
