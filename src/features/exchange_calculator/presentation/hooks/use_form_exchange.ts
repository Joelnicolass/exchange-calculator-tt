import * as yup from "yup";
import { useFormik } from "formik";
import { mapToArr } from "../../../../common/utils";
import { Currency } from "../../domain/entities/currency/currency.entity";

export const useFormExchange = ({
  amount,
  fromCurrency,
  toCurrency,
  currencies,
  setAmount,
}: {
  amount: number | undefined | string;
  fromCurrency: string;
  toCurrency: string;
  currencies: Map<string, Currency>;
  setAmount: (amount: string) => void;
}) => {
  const validationSchema = yup.object({
    amount: yup
      .number()
      .required("Amount is required")
      .min(0.01, "Amount must be greater than 0.00"),
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
      ? `  ${currencies.get(fromCurrency)?.symbol}`
      : "$"
  } `;

  const placeholder = `${currencies.get(fromCurrency)?.symbol} 0.00`;

  const options = mapToArr(currencies);

  const isNegative = (value: string | number) => {
    return Number(value) < 0;
  };

  const handleValueChange = (value: string | undefined) => {
    form.setFieldValue("amount", value);
    if (isNegative(value || "")) return;
    setAmount(value || "");
  };

  return { form, prefix, placeholder, options, handleValueChange };
};
