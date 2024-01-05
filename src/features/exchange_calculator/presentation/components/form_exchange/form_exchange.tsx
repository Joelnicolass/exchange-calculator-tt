import React from "react";
import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppCurrencyInput from "../../../../../common/presentation/components/app_currency_input/app_currency_input";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import AppIconButton from "../../../../../common/presentation/components/app_icon_button/app_icon_button";
import DollarChange from "../../../../../common/presentation/components/icons/dollar_change";
import styles from "./form_exchange.module.css";
import { useFormExchange } from "../../hooks/use_form_exchange";

const FormExchange = () => {
  const {
    form,
    amount,
    options,
    placeholder,
    prefix,
    toCurrency,
    fromCurrency,
    FormExchangeFields,
    handleReset,
    handleValueChange,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    invertCurrencies,
  } = useFormExchange();

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <AppLabel text="Amount">
        <AppCurrencyInput
          name={FormExchangeFields.amount}
          prefix={prefix}
          placeholder={placeholder}
          defaultValue={amount}
          decimalsLimit={2}
          onValueChange={handleValueChange}
          onBlur={form.handleBlur}
          error={form.errors.amount}
          onClick={handleReset}
          value={amount}
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
