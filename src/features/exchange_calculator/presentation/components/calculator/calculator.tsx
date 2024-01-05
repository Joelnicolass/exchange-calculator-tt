import React from "react";

import FormExchange from "../form_exchange/form_exchange";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorViewModel } from "../../view_model/calculator.view_model";
import AppBaseRateConversion from "../../../../../common/presentation/components/app_base_rate_conversion/app_base_rate_conversion";
import LinksAndLastUpdated from "../links_and_last_updated/links_and_last_updated";
import AppNotice from "../../../../../common/presentation/components/app_notice/app_notice";

import styles from "./calculator.module.css";

const Calculator = () => {
  const {
    amount,
    currencies,
    fromCurrency,
    toCurrency,
    rates,
    lastUpdated,
    fromText,
    toText,
    calculateInverted,
    setAmount,
    invertCurrencies,
    handleFromCurrencyChange,
    handleToCurrencyChange,
  } = useCalculatorViewModel();

  const NOTICE = `We use the mid-market rate for our Converter. This is for 
  informational purposes only. You won’t receive this rate when sending money.`;

  return (
    <article className={styles.calculator}>
      <FormExchange
        amount={amount}
        currencies={currencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setAmount={setAmount}
        handleFromCurrencyChange={handleFromCurrencyChange}
        handleToCurrencyChange={handleToCurrencyChange}
        invertCurrencies={invertCurrencies}
      />

      <AppResultExchange fromText={fromText} toText={toText} />

      <div>
        <AppBaseRateConversion
          fromAmount="1"
          fromSymbol={currencies.get(fromCurrency)?.id || ""}
          toAmount={rates?.get(toCurrency)?.toString() || ""}
          toSymbol={currencies.get(toCurrency)?.id || ""}
        />

        <AppBaseRateConversion
          fromAmount="1"
          fromSymbol={currencies.get(toCurrency)?.id || ""}
          toAmount={calculateInverted()}
          toSymbol={currencies.get(fromCurrency)?.id || ""}
        />
      </div>

      <AppNotice>
        <p>{NOTICE}</p>
      </AppNotice>
      <LinksAndLastUpdated lastUpdated={lastUpdated} />
    </article>
  );
};

export default Calculator;
