import React from "react";
import FormExchangeContainer from "../calculator_form_exchange_container/calculator_form_exchange_container";
import ConversionAndNoticeContainer from "../calculator_conversion_and_notice/calculator_conversion_and_notice";
import CalculatorProvider from "../../providers/calculator.provider";

import styles from "./calculator.module.css";
import ResultExchangeContainer from "../calculator_result_exchange_container/calculator_result_exchange_container";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Calculator = ({ children }: Props) => {
  return (
    <CalculatorProvider>
      <article className={styles.calculator}>{children}</article>
    </CalculatorProvider>
  );
};

Calculator.FormExchange = FormExchangeContainer;
Calculator.ResultExchange = ResultExchangeContainer;
Calculator.ConversionAndNotice = ConversionAndNoticeContainer;

export default Calculator;
