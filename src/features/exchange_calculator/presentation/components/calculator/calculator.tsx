import React from "react";
import FormExchangeContainer from "../calculator_form_exchange_container/calculator_form_exchange_container";
import ConversionAndNoticeContainer from "../calculator_conversion_and_notice/calculator_conversion_and_notice";
import CalculatorProvider from "../../providers/calculator.provider";

import styles from "./calculator.module.css";
import ResultExchangeContainer from "../calculator_result_exchange_container/calculator_result_exchange_container";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Calculator component.
 *
 * @param {Props} props - The component props.
 * @param {ReactNode} props.children - The child elements.
 * @returns {JSX.Element} The rendered Calculator component.
 */
const Calculator = ({ children }: Props): JSX.Element => {
  return (
    <CalculatorProvider>
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
