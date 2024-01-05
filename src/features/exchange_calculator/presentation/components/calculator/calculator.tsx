import React from "react";

import FormExchange from "../form_exchange/form_exchange";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import { useCalculatorViewModel } from "../../view_model/calculator.view_model";
import AppBaseRateConversion from "../../../../../common/presentation/components/app_base_rate_conversion/app_base_rate_conversion";
import LinksAndLastUpdated from "../links_and_last_updated/links_and_last_updated";
import AppNotice from "../../../../../common/presentation/components/app_notice/app_notice";

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
    <article
      style={{
        backgroundColor: "#fff",
        borderRadius: "4px",
        padding: "1rem",
        width: "90%",
        maxWidth: "1300px",
        minHeight: "600px",
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
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
          fromSymbol={currencies.get(fromCurrency)?.symbol || ""}
          toAmount={rates?.get(toCurrency)?.toString() || ""}
          toSymbol={currencies.get(toCurrency)?.symbol || ""}
        />

        <AppBaseRateConversion
          fromAmount="1"
          fromSymbol={currencies.get(toCurrency)?.symbol || ""}
          toAmount={calculateInverted()}
          toSymbol={currencies.get(fromCurrency)?.symbol || ""}
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
