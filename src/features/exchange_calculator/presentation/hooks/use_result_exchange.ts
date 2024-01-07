import { Amount } from "../../domain/value_objects/amount/amount.value_object";
import { calculatorUseCases } from "../../infrastructure/usecases/calculator.usecases_impl";
import { NULL_OR_UNDEFINED } from "../constants";

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

  const calculate = () => {
    if (!isValidRates) return NULL_OR_UNDEFINED;

    const rate = rates.get(toCurrency);
    if (!rate) return NULL_OR_UNDEFINED;

    const result = calculatorUseCases.calculateExchange
      .execute(rate, amount)
      .fold(
        () => 0,
        (result) => result
      );

    return result;
  };

  const calculateInverted = () => {
    if (!isValidRates) return NULL_OR_UNDEFINED;

    const rate = rates.get(toCurrency);
    if (!rate) return NULL_OR_UNDEFINED;

    const result = calculatorUseCases.calculateInverseExchange
      .execute(rate, 1)
      .fold(
        () => 0,
        (result) => result
      );

    return result;
  };

  const fromAmountFormatted = () => {
    const name =
      currencies.get(fromCurrency) && currencies.get(fromCurrency)?.name;

    if (!name) return NULL_OR_UNDEFINED;
    if (!Amount.ensureValidAmount(amount)) return `-`;

    return `${amount ? amount : NULL_OR_UNDEFINED} ${name} =`;
  };

  const toAmountFormatted = () => {
    const name = currencies.get(toCurrency) && currencies.get(toCurrency)?.name;

    if (!name) return NULL_OR_UNDEFINED;
    if (!Amount.ensureValidAmount(amount)) return NULL_OR_UNDEFINED;

    return `${calculate()} ${name}`;
  };

  const baseRateConversion = {
    fromAmount: "1",
    fromSymbol: currencies.get(fromCurrency)?.id || "",
    toAmount: rates?.get(toCurrency)?.toString() || NULL_OR_UNDEFINED,
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
