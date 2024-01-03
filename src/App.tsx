import React, { useEffect, useState } from "react";
import { currencyUseCases } from "./features/calculator/infrastructure/usecases/currency.usecases_impl";
import { Currency } from "./features/calculator/domain/entities/currency/currency.entity";
import { mapToArr } from "./common/utils";

const App = () => {
  const [currencies, setCurrencies] = useState<Map<string, Currency>>(
    new Map()
  );

  useEffect(() => {
    const getCurrencies = async () => {
      (await currencyUseCases.getCurrencies.execute()).fold(
        (error) => console.log(error),
        (response) => setCurrencies(response)
      );
    };

    getCurrencies();
  }, []);

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
      <form>
        <select
          className="
            border
            border-gray-300
            rounded
            px-4
            py-2
            w-full
          "
        >
          {mapToArr(currencies).map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default App;
