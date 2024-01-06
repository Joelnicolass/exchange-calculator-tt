import * as yup from "yup";
import { useFormik } from "formik";
import { isNegative, mapToArr } from "../../../../common/utils";
import {
  INITIAL_STATE_AMOUNT,
  INITIAL_STATE_FROM,
  INITIAL_STATE_TO,
} from "../constants";
import { Currency } from "../../domain/entities/currency/currency.entity";

// TODO! documentar
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

  const ERROR_MIN_AMOUNT = "Amount must be greater than 0.00";
  const ERROR_REQUIRED = "Amount is required";

  // TODO! mover a logica de negocio en domain
  const validationSchema = yup.object({
    amount: yup.number().required(ERROR_REQUIRED).min(0.01, ERROR_MIN_AMOUNT),
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
    form.setFieldValue(FormExchangeFields.amount, "");
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
