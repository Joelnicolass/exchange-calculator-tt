import React, { useState } from "react";

import Calculator from "../../components/calculator/calculator";
import BackgroundLayout from "../../components/background_layout/background_layout";
import AppSeparator from "../../../../../common/presentation/components/app_separator/app_separator";
import AppTitle from "../../../../../common/presentation/components/app_title/app_title";

import styles from "./calculator_screen.module.css";
import { useTitle } from "../../hooks/use_title";

const CalculatorScreen = () => {
  const { formatTitle, update } = useTitle();

  return (
    <div className={styles.container}>
      <BackgroundLayout />
      <AppTitle color={"white"}>{formatTitle()}</AppTitle>

      <AppSeparator height="md" />
      <Calculator
        onAmountChanged={update.amountTitle}
        onFromCurrencyChanged={update.fromCurrency}
        onToCurrencyChanged={update.toCurrency}
      >
        <section>
          <Calculator.FormExchange />
          <Calculator.ResultExchange />
        </section>
        <Calculator.ConversionAndNotice />
      </Calculator>
    </div>
  );
};

export default CalculatorScreen;
