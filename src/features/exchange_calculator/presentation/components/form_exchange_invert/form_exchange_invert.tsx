import React from "react";
import AppIconButton from "../../../../../common/presentation/components/app_icon_button/app_icon_button";
import DollarChange from "../../../../../common/presentation/components/icons/dollar_change";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

import styles from "./form_exchange_invert.module.css";

const FormExchangeInvert = () => {
  const {
    formExchange: { toCurrency, fromCurrency, invertCurrencies },
    currenciesAndRates: { currencies, getRatesByBaseCurrency },
    handlers: { onFromCurrencyChange, onToCurrencyChange },
  } = useCalculatorContext();

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default FormExchangeInvert;
