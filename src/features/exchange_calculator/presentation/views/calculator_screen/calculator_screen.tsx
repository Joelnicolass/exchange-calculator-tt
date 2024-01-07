import Calculator from "../../components/calculator/calculator";
import AppSeparator from "../../../../../common/presentation/components/app_separator/app_separator";
import AppTitle from "../../../../../common/presentation/components/app_title/app_title";

import styles from "./calculator_screen.module.css";
import { useTitle } from "../../hooks/use_title";
import { useWelcome } from "../../hooks/use_welcome";

/**
 * Represents the Calculator Screen component.
 * This component displays the calculator screen with the exchange calculator functionality.
 */
const CalculatorScreen = () => {
  useWelcome();
  const { formatTitle, update } = useTitle();

  return (
    <article className={styles.container}>
      <div className={styles.background}></div>
      <section className={styles.titleContainer}>
        <AppTitle color={"white"}>{formatTitle()}</AppTitle>
      </section>

      <AppSeparator height="md" />

      {/* 
        Is possible configure the calculator to show the conversion and notice section.
      */}
      <Calculator
        onAmountChanged={update.amountTitle}
        onFromCurrencyChanged={update.fromCurrency}
        onToCurrencyChanged={update.toCurrency}
      >
        {/* 
          Is possible configure the calculator to show the form exchange section.
        */}
        <section>
          <Calculator.FormExchange>
            <Calculator.FormExchange.Amount />
            <Calculator.FormExchange.From />
            <Calculator.FormExchange.Invert />
            <Calculator.FormExchange.To />
          </Calculator.FormExchange>
          <Calculator.ResultExchange />
        </section>
        <Calculator.ConversionAndNotice />
      </Calculator>
    </article>
  );
};

export default CalculatorScreen;
