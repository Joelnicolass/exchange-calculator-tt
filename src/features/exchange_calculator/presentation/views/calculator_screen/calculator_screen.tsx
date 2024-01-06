import React from "react";

import Calculator from "../../components/calculator/calculator";
import BackgroundLayout from "../../components/background_layout/background_layout";
import AppSeparator from "../../../../../common/presentation/components/app_separator/app_separator";
import AppTitle from "../../../../../common/presentation/components/app_title/app_title";

import styles from "./calculator_screen.module.css";

const CalculatorScreen = () => {
  return (
    <div className={styles.container}>
      <BackgroundLayout />
      <AppTitle color={"white"}>
        100 EUR to USD - Convert Euros to US Dollars
      </AppTitle>

      <AppSeparator height="md" />
      <Calculator>
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
