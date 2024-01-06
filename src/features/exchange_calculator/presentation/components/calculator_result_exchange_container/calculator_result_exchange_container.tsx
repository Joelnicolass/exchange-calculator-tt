import React from "react";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

/**
 * Container component for displaying the result of the exchange calculation.
 */
const ResultExchangeContainer = () => {
  const {
    resultExchange: { fromAmountFormatted, toAmountFormatted },
  } = useCalculatorContext();

  return (
    <AppResultExchange
      fromText={fromAmountFormatted}
      toText={toAmountFormatted}
    />
  );
};

export default ResultExchangeContainer;
