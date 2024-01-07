import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import { ShimmerTitle } from "react-shimmer-effects";

/**
 * Container component for displaying the result of the exchange calculation.
 */
const ResultExchangeContainer = () => {
  const {
    resultExchange: { fromAmountFormatted, toAmountFormatted },
    currenciesAndRates: { isExchangeRatesLoading },
  } = useCalculatorContext();

  if (isExchangeRatesLoading) {
    return <ShimmerTitle line={3} gap={30} />;
  }

  return (
    <AppResultExchange
      fromText={fromAmountFormatted}
      toText={toAmountFormatted}
    />
  );
};

export default ResultExchangeContainer;
