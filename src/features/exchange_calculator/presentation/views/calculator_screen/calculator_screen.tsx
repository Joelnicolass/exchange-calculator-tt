import Calculator from "../../components/calculator/calculator";
import BackgroundLayout from "../../components/background_layout/background_layout";
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
    <div className={styles.container}>
      <BackgroundLayout />
      <AppTitle color={"white"}>{formatTitle()}</AppTitle>

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
    </div>
  );
};

export default CalculatorScreen;
