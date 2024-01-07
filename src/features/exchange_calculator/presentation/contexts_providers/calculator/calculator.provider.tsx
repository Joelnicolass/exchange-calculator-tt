import React from "react";
import { CalculatorContext } from "./calculator.context";
import { useCalculator } from "../../view_model/calculator.view_model";
import { Currency } from "../../../domain/entities/currency/currency.entity";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  onAmountChanged?: (amount: number | string) => void;
  onFromCurrencyChanged?: (currency: Currency) => void;
  onToCurrencyChanged?: (currency: Currency) => void;
}
/**
 * Provides a context for the exchange calculator feature.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @param {Function} props.onAmountChanged - The callback function for when the amount is changed.
 * @param {Function} props.onToCurrencyChanged - The callback function for when the "to" currency is changed.
 * @param {Function} props.onFromCurrencyChanged - The callback function for when the "from" currency is changed.
 * @returns {JSX.Element} The rendered component.
 */
const CalculatorProvider = ({
  children,
  onAmountChanged,
  onToCurrencyChanged,
  onFromCurrencyChanged,
}: Props) => {
  const { currenciesAndRates, formExchange, resultExchange, notice, shimmer } =
    useCalculator();

  return (
    <CalculatorContext.Provider
      value={{
        currenciesAndRates,
        formExchange,
        resultExchange,
        notice,
        shimmer,
        handlers: {
          onAmountChange: (amount: number | string) => {
            onAmountChanged && onAmountChanged(amount);
          },
          onFromCurrencyChange: (currency: Currency) => {
            onFromCurrencyChanged && onFromCurrencyChanged(currency);
          },
          onToCurrencyChange: (currency: Currency) => {
            onToCurrencyChanged && onToCurrencyChanged(currency);
          },
        },
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
