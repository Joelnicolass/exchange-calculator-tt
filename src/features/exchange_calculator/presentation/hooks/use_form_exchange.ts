import * as yup from "yup";
import { useFormik } from "formik";
import { mapToArr } from "../../../../common/utils";
import {
  ERROR_MIN_AMOUNT,
  ERROR_REQUIRED,
  INITIAL_STATE_AMOUNT,
  INITIAL_STATE_FROM,
  INITIAL_STATE_TO,
} from "../constants";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { Amount } from "../../domain/value_objects/amount/amount.value_object";

/**
 * Custom hook for managing the exchange form.
 *
 * @param currencies - A map of currencies.
 * @returns An object containing form values, handlers, and other properties related to the exchange form.
 */
export const useFormExchange = ({
  currencies,
}: {
  currencies: Map<string, Currency>;
}) => {
  enum FormExchangeFields {
    amount = "amount",
    fromCurrency = "fromCurrency",
    toCurrency = "toCurrency",
  }

  const validationSchema = yup.object({
    /* 
      Is posible to use this validationSchema, but I prefer to use the Amount class to validate the amount.

      amount: yup.number().required(ERROR_REQUIRED).min(0.01, ERROR_MIN_AMOUNT)
    */

    amount: yup
      .number()
      .required(ERROR_REQUIRED)
      .test({
        name: "isPositive",
        message: ERROR_MIN_AMOUNT,
        test: (value) => Amount.ensureValidAmount(value),
      }),
  });

  const form = useFormik({
    initialValues: {
      amount: INITIAL_STATE_AMOUNT,
      fromCurrency: INITIAL_STATE_FROM,
      toCurrency: INITIAL_STATE_TO,
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  const handleValueChange = (value: string | undefined) => {
    form.setFieldValue(FormExchangeFields.amount, value);
  };

  const handleReset = () => {
    form.setFieldValue(FormExchangeFields.amount, undefined);
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = event.target.value;
    form.setFieldValue(FormExchangeFields.fromCurrency, id);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const id = event.target.value;
    form.setFieldValue(FormExchangeFields.toCurrency, id);
  };

  const invertCurrencies = () => {
    form.setFieldValue(FormExchangeFields.fromCurrency, form.values.toCurrency);

    form.setFieldValue(FormExchangeFields.toCurrency, form.values.fromCurrency);
  };

  const prefix = `${
    currencies.get(form.values.fromCurrency)
      ? `${currencies.get(form.values.fromCurrency)?.symbol}`
      : "$"
  } `;

  const placeholder = `${
    currencies.get(form.values.fromCurrency)?.symbol
  } 0.00`;

  const options = mapToArr(currencies);

  return {
    form,
    amount: form.values.amount,
    toCurrency: form.values.toCurrency,
    fromCurrency: form.values.fromCurrency,
    prefix,
    options,
    placeholder,
    FormExchangeFields,
    handleReset,
    invertCurrencies,
    handleValueChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
  };
};
