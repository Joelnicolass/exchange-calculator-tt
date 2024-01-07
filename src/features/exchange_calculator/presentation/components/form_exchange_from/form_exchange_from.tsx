import React from "react";
import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

const FormExchangeFrom = () => {
  const {
    formExchange: { options, fromCurrency, handleFromCurrencyChange },
    currenciesAndRates: { currencies, getRatesByBaseCurrency },
    handlers: { onFromCurrencyChange },
  } = useCalculatorContext();

  return (
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
  );
};

export default FormExchangeFrom;
