import { useCalculatorContext } from "./use_calculator_context";
import { useResultExchange } from "./use_result_exchange";

/**
 * Custom hook that provides the notice message and last updated timestamp.
 * @returns An object containing the notice message, last updated timestamp,
 * base rate conversion, and inverted base rate conversion.
 */
export const useNoticeAndLastUpdated = () => {
  const { lastUpdated } = useCalculatorContext();

  const { baseRateConversion, invertedBaseRateConversion } =
    useResultExchange();

  const NOTICE = `We use the mid-market rate for our Converter. This is for 
        informational purposes only. You won’t receive this rate when sending money.`;

  return {
    NOTICE,
    lastUpdated,
    baseRateConversion,
    invertedBaseRateConversion,
  };
};
