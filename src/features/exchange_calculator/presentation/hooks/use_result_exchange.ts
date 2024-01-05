import { useCalculatorContext } from "./use_calculator_context";

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

  const fromText = `${amount} ${currencies.get(fromCurrency)?.name} =`;

  const toText = `${calculate()} ${currencies.get(toCurrency)?.name}`;

  return {
    fromText,
    toText,
  };
};
