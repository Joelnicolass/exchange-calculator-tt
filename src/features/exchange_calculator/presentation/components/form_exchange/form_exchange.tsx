import React from "react";
import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppCurrencyInput from "../../../../../common/presentation/components/app_currency_input/app_currency_input";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import AppIconButton from "../../../../../common/presentation/components/app_icon_button/app_icon_button";
import DollarChange from "../../../../../common/presentation/components/icons/dollar_change";
import styles from "./form_exchange.module.css";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import { DECIMAL_LIMIT, MAX_LENGTH_AMOUNT } from "../../constants";

/**
 * This component represents a form for exchanging currencies.
 * It allows users to input the amount to be exchanged and select the currencies to convert from and to.
 */
const FormExchange = () => {
  const {
    formExchange: {
      form,
      prefix,
      amount,
      options,
      toCurrency,
      placeholder,
      fromCurrency,
      FormExchangeFields,
      handleReset,
      invertCurrencies,
      handleValueChange,
      handleToCurrencyChange,
      handleFromCurrencyChange,
    },
    currenciesAndRates: { currencies, getRatesByBaseCurrency },
    handlers: { onAmountChange, onFromCurrencyChange, onToCurrencyChange },
  } = useCalculatorContext();

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
          value={amount}
          decimalsLimit={DECIMAL_LIMIT}
          maxLength={MAX_LENGTH_AMOUNT}
          defaultValue={amount}
          placeholder={placeholder}
          prefix={prefix}
          onValueChange={(value) => {
            handleValueChange(value);
            onAmountChange(value || 0);
          }}
          onBlur={form.handleBlur}
          error={form.errors.amount}
          onClick={() => {
            handleReset();
            onAmountChange(0);
          }}
          /* 
            Is possible configure the input to allow negative values.
            
            allowNegativeValue={false}
          */
        />
      </AppLabel>

      <AppLabel text="From">
        <AppSelect
          key={fromCurrency}
          value={fromCurrency}
          onChange={(e) => {
            const _currency = currencies.get(e.target.value)!;
            handleFromCurrencyChange(e);
            getRatesByBaseCurrency(_currency);
            onFromCurrencyChange(_currency);
          }}
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
        onClick={() => {
          const _toCurrency = currencies.get(toCurrency)!;
          const _fromCurrency = currencies.get(fromCurrency)!;
          invertCurrencies();
          getRatesByBaseCurrency(_toCurrency);
          onFromCurrencyChange(_toCurrency);
          onToCurrencyChange(_fromCurrency);
        }}
        type="button"
      />

      <AppLabel text="To">
        <AppSelect
          key={toCurrency}
          value={toCurrency}
          onChange={(e) => {
            const _currency = currencies.get(e.target.value)!;
            handleToCurrencyChange(e);
            onToCurrencyChange(_currency);
          }}
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
