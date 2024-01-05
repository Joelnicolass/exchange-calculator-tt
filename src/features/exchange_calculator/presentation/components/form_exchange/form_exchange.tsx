import React from "react";
import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppCurrencyInput from "../../../../../common/presentation/components/app_currency_input/app_currency_input";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import { Currency } from "../../../domain/entities/currency/currency.entity";
import AppIconButton from "../../../../../common/presentation/components/app_icon_button/app_icon_button";
import DollarChange from "../../../../../common/presentation/components/icons/dollar_change";
import styles from "./form_exchange.module.css";
import { useFormExchange } from "../../hooks/use_form_exchange";

type Props = {
  currencies: Map<string, Currency>;
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  setAmount: (value: string) => void;
  handleFromCurrencyChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleToCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  invertCurrencies: () => void;
};

const FormExchange = ({
  currencies,
  fromCurrency,
  toCurrency,
  amount,
  setAmount,
  handleFromCurrencyChange,
  handleToCurrencyChange,
  invertCurrencies,
}: Props) => {
  const { form, options, placeholder, prefix, handleValueChange } =
    useFormExchange({
      currencies,
      fromCurrency,
      toCurrency,
      amount,
      setAmount,
    });

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <AppLabel text="Amount">
        <AppCurrencyInput
          prefix={prefix}
          placeholder={placeholder}
          defaultValue={amount}
          decimalsLimit={2}
          name="amount"
          onValueChange={handleValueChange}
          onBlur={form.handleBlur}
          error={form.errors.amount}
        />
      </AppLabel>

      <AppLabel text="From">
        <AppSelect
          key={fromCurrency}
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          options={options}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.name}
              </option>
            ))
          }
        />
      </AppLabel>

      <AppIconButton
        icon={<DollarChange color="#1a8dff" />}
        onClick={invertCurrencies}
        type="button"
      />

      <AppLabel text="To">
        <AppSelect
          key={toCurrency}
          value={toCurrency}
          onChange={handleToCurrencyChange}
          options={options}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.id} - {currency.name}
              </option>
            ))
          }
        />
      </AppLabel>
    </form>
  );
};

export default FormExchange;
