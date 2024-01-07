import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

import styles from "./calculator_result_exchange_container.module.css";

/**
 * Container component for displaying the result of the exchange calculation.
 */
const ResultExchangeContainer = () => {
  const {
    resultExchange: { fromAmountFormatted, toAmountFormatted },
  } = useCalculatorContext();

  return (
    <section className={styles.container}>
      <AppResultExchange
        fromText={fromAmountFormatted}
        toText={toAmountFormatted}
      />
    </section>
  );
};

export default ResultExchangeContainer;
