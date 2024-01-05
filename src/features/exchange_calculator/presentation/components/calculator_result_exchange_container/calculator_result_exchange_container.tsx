import React from "react";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useResultExchange } from "../../hooks/use_result_exchange";

const ResultExchangeContainer = () => {
  const { fromText, toText } = useResultExchange();

  return <AppResultExchange fromText={fromText} toText={toText} />;
};

export default ResultExchangeContainer;
