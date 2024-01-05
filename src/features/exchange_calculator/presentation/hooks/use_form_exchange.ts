import * as yup from "yup";
import { useFormik } from "formik";
import { isNegative, mapToArr } from "../../../../common/utils";
import { useCalculatorContext } from "./use_calculator_context";

/**
 * Custom hook for managing the form state.
 *
 * @returns An object containing the form state and various handlers and values related to the exchange calculator.
 */
export const useFormExchange = () => {
  const {
    amount,
    fromCurrency,
    toCurrency,
    currencies,
    setAmount,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    invertCurrencies,
  } = useCalculatorContext();

  enum FormExchangeFields {
    amount = "amount",
    fromCurrency = "fromCurrency",
    toCurrency = "toCurrency",
  }

  const ERROR_MIN_AMOUNT = "Amount must be greater than 0.00";
  const ERROR_REQUIRED = "Amount is required";

  // TODO! mover a logica de negocio en domain
  const validationSchema = yup.object({
    amount: yup.number().required(ERROR_REQUIRED).min(0.01, ERROR_MIN_AMOUNT),
  });

  const form = useFormik({
    initialValues: {
      amount: amount,
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
    },
    onSubmit: () => {},
    validationSchema: validationSchema,
  });

  const prefix = `${
    currencies.get(fromCurrency)
      ? `${currencies.get(fromCurrency)?.symbol}`
      : "$"
  } `;

  const placeholder = `${currencies.get(fromCurrency)?.symbol} 0.00`;

  const options = mapToArr(currencies);

  const handleValueChange = (value: string | undefined) => {
    form.setFieldValue(FormExchangeFields.amount, value);

    if (isNegative(value || "")) return;
    setAmount(value || "");
  };

  const handleReset = () => {
    form.resetForm();
    setAmount("");
  };

  return {
    form,
    amount,
    prefix,
    placeholder,
    options,
    toCurrency,
    fromCurrency,
    FormExchangeFields,
    handleReset,
    handleValueChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    invertCurrencies,
  };
};
