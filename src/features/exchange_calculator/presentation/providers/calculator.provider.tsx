import React from "react";
import { CalculatorContext } from "./calculator.context";
import { useCalculatorViewModel } from "../view_model/calculator.view_model";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

/**
 * CalculatorProvider component.
 *
 * @param children - The child components to be rendered within the CalculatorProvider.
 */
const CalculatorProvider = ({ children }: Props) => {
  const { currenciesAndRates, formExchange, resultExchange, notice } =
    useCalculatorViewModel();

  return (
    <CalculatorContext.Provider
      value={{
        formExchange,
        resultExchange,
        currenciesAndRates,
        notice,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
