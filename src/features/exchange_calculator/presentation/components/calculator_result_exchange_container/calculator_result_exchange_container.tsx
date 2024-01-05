import React from "react";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useResultExchange as useResultExchange } from "../../hooks/use_result_exchange";

/**
 * Container component for displaying the result of the exchange calculation.
 */
const ResultExchangeContainer = () => {
  const { fromAmountFormatted, toAmountFormatted } = useResultExchange();

  return (
    <AppResultExchange
      fromText={fromAmountFormatted}
      toText={toAmountFormatted}
    />
  );
};

export default ResultExchangeContainer;
