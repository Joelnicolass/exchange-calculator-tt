import React from "react";
import ConversionAndNoticeContainer from "../calculator_conversion_and_notice/calculator_conversion_and_notice";

import styles from "./calculator.module.css";
import ResultExchangeContainer from "../calculator_result_exchange_container/calculator_result_exchange_container";
import { Currency } from "../../../domain/entities/currency/currency.entity";
import CalculatorProvider from "../../contexts_providers/calculator/calculator.provider";
import FormExchange from "../form_exchange/form_exchange";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  onAmountChanged?: (amount: number | string) => void;
  onFromCurrencyChanged?: (currency: Currency) => void;
  onToCurrencyChanged?: (currency: Currency) => void;
}

/**
 * Calculator component. Compound Component Pattern.
 *
 * This component is responsible for rendering the calculator component.
 *
 * This component has no external dependencies, it only depends on the internal components.
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
  return (
    <CalculatorProvider
      onAmountChanged={onAmountChanged}
      onFromCurrencyChanged={onFromCurrencyChanged}
      onToCurrencyChanged={onToCurrencyChanged}
    >
      <article className={styles.calculator}>{children}</article>
    </CalculatorProvider>
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
Calculator.FormExchange = FormExchange;

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
