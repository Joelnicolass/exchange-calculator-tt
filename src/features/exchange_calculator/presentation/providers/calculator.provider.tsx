import React from "react";
import { CalculatorContext } from "./calculator.context";
import { useCalculatorViewModel } from "../view_model/calculator.view_model";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const CalculatorProvider = ({ children }: Props) => {
  const {
    amount,
    currencies,
    fromCurrency,
    toCurrency,
    rates,
    lastUpdated,
    calculateInverted,
    setAmount,
    invertCurrencies,
    handleFromCurrencyChange,
    handleToCurrencyChange,
  } = useCalculatorViewModel();

  return (
    <CalculatorContext.Provider
      value={{
        amount,
        currencies,
        fromCurrency,
        toCurrency,
        rates,
        lastUpdated,
        calculateInverted,
        setAmount,
        invertCurrencies,
        handleFromCurrencyChange,
        handleToCurrencyChange,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
