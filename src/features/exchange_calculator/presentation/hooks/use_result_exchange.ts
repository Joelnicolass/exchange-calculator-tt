import { isNegative } from "../../../../common/utils";

/**
 * Custom hook that calculates the result of a currency exchange based on the provided parameters.
 *
 * @param {Object} options - The options for the currency exchange.
 * @param {Map<string, number>} options.rates - The exchange rates for different currencies.
 * @param {string} options.amount - The amount to be exchanged.
 * @param {string} options.fromCurrency - The currency to be exchanged from.
 * @param {string} options.toCurrency - The currency to be exchanged to.
 * @param {Map<string, { id: string; name: string }>} options.currencies - The available currencies.
 *
 * @returns {Object} - An object containing the calculated values and formatted strings.
 */
export const useResultExchange = ({
  rates,
  amount,
  fromCurrency,
  toCurrency,
  currencies,
}: {
  rates?: Map<string, number>;
  amount: string;
  fromCurrency: string;
  toCurrency: string;
  currencies: Map<string, { id: string; name: string }>;
}) => {
  const isValidRates = rates instanceof Map && rates.has(toCurrency);

  // TODO! Mover a un usecase
  const calculate = () => {
    if (!isValidRates) return 0;

    const rate = rates.get(toCurrency);
    if (!rate) return 0;

    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) return 0;

    return numericAmount * rate!;
  };

  // TODO! Mover a un usecase
  const calculateInverted = () => {
    if (!isValidRates) return 1;

    return 1 / rates.get(toCurrency)!;
  };

  const fromAmountFormatted = () => {
    if (isNegative(amount)) return `0`;

    return `${amount ? amount : 0} ${currencies.get(fromCurrency)?.name} =`;
  };

  const toAmountFormatted = () => {
    if (isNegative(amount)) return `0`;

    return `${calculate()} ${currencies.get(toCurrency)?.name}`;
  };

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
    baseRateConversion,
    invertedBaseRateConversion,
    toAmountFormatted: toAmountFormatted(),
    fromAmountFormatted: fromAmountFormatted(),
  };
};
