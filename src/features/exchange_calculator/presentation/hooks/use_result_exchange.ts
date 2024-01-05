import { useCalculatorContext } from "./use_calculator_context";

/**
 * Custom hook for calculating exchange rates and formatting amounts.
 * @returns An object containing formatted values.
 */
export const useResultExchange = () => {
  const { amount, fromCurrency, currencies, toCurrency, rates } =
    useCalculatorContext();

  // TODO! Mover a un usecase
  const calculate = () => {
    if (!rates) return;
    const rate = rates.get(toCurrency);

    if (!rate) return 1;
    if (isNaN(Number(amount))) return 1;

    return Number(amount) * rate;
  };

  // TODO! Mover a un usecase
  const calculateInverted = () => {
    if (amount && rates) return 1 / rates.get(toCurrency)!;

    return "";
  };

  const fromAmountFormatted = `${amount} ${
    currencies.get(fromCurrency)?.name
  } =`;

  const toAmountFormatted = `${calculate()} ${
    currencies.get(toCurrency)?.name
  }`;

  const baseRateConversion = {
    fromAmount: "1",
    fromSymbol: currencies.get(fromCurrency)?.id || "",
    toAmount: rates?.get(toCurrency)?.toString() || "",
    toSymbol: currencies.get(toCurrency)?.id || "",
  };

  const invertedBaseRateConversion = {
    fromAmount: "1",
    fromSymbol: currencies.get(toCurrency)?.id || "",
    toAmount: calculateInverted(),
    toSymbol: currencies.get(fromCurrency)?.id || "",
  };

  return {
    calculate,
    calculateInverted,
    fromAmountFormatted,
    toAmountFormatted,
    baseRateConversion,
    invertedBaseRateConversion,
  };
};
