import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import FormResultExchangeShimmer from "../form_result_exchange_shimmer/form_result_exchange_shimmer";

/**
 * Container component for displaying the result of the exchange calculation.
 */
const ResultExchangeContainer = () => {
  const {
    resultExchange: { fromAmountFormatted, toAmountFormatted },
    currenciesAndRates: { isExchangeRatesLoading },
  } = useCalculatorContext();

  if (isExchangeRatesLoading) return <FormResultExchangeShimmer />;

  return (
    <AppResultExchange
      fromText={fromAmountFormatted}
      toText={toAmountFormatted}
    />
  );
};

export default ResultExchangeContainer;
