import React from "react";
import FormExchangeContainer from "../calculator_form_exchange_container/calculator_form_exchange_container";
import ConversionAndNoticeContainer from "../calculator_conversion_and_notice/calculator_conversion_and_notice";

import styles from "./calculator.module.css";
import ResultExchangeContainer from "../calculator_result_exchange_container/calculator_result_exchange_container";
import { CalculatorContext } from "../../contexts/calculator/calculator.context";
import { useCalculator } from "../../view_model/calculator.view_model";
import { Currency } from "../../../domain/entities/currency/currency.entity";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  onAmountChanged?: (amount: number | string) => void;
  onFromCurrencyChanged?: (currency: Currency) => void;
  onToCurrencyChanged?: (currency: Currency) => void;
}

/**
 * Calculator component. Compound Component Pattern.
 *
 * @param {Props} props - The component props.
 * @param {ReactNode} props.children - The child elements.
 * @returns {JSX.Element} The rendered Calculator component.
 */
const Calculator = ({
  onAmountChanged,
  onFromCurrencyChanged,
  onToCurrencyChanged,
  children,
}: Props): JSX.Element => {
  const { currenciesAndRates, formExchange, resultExchange, notice } =
    useCalculator();

  return (
    <CalculatorContext.Provider
      value={{
        currenciesAndRates,
        formExchange,
        resultExchange,
        notice,
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
      <article className={styles.calculator}>{children}</article>
    </CalculatorContext.Provider>
  );
};
/**
 * Represents the Calculator component.
 * @module Calculator
 */

/**
 * Represents the FormExchange component.
 * @memberof Calculator
 * @type {React.ComponentType}
 */
Calculator.FormExchange = FormExchangeContainer;

/**
 * Represents the ResultExchange component.
 * @memberof Calculator
 * @type {React.ComponentType}
 */
Calculator.ResultExchange = ResultExchangeContainer;

/**
 * Represents the ConversionAndNotice component.
 * @memberof Calculator
 * @type {React.ComponentType}
 */
Calculator.ConversionAndNotice = ConversionAndNoticeContainer;

export default Calculator;
