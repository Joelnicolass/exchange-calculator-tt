import React from "react";
import FormExchange from "../form_exchange/form_exchange";
import AppResultExchange from "../../../../../common/presentation/components/app_result_exchange/app_result_exchange";
import AppAnchor from "../../../../../common/presentation/components/app_anchor/app_anchor";
import { formatDate } from "../../../../../common/utils";
import { useCalculatorViewModel } from "../../view_model/calculator.view_model";
import AppBaseRateConversion from "../../../../../common/presentation/components/app_base_rate_conversion/app_base_rate_conversion";

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

      <section
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#e8f3ff",
          borderRadius: "4px",
          padding: "1rem",
          fontSize: "14px",
          fontWeight: "400",
        }}
      >
        <p>
          We use the mid-market rate for our Converter. This is for
          informational purposes only. You won’t receive this rate when sending
          money.
        </p>
      </section>
      <section
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "4px",
          padding: "1rem",
          fontSize: "12px",
          fontWeight: "300",
        }}
      >
        <p>
          <AppAnchor blank href="https://www.xe.com/currency/eur-euro/">
            Euro
          </AppAnchor>{" "}
          to{" "}
          <AppAnchor blank href="https://www.xe.com/currency/usd-us-dollar/">
            US Dollar
          </AppAnchor>{" "}
          conversion - Last updated:{" "}
          {lastUpdated ? formatDate(lastUpdated) : "No data available"}
        </p>
      </section>
    </article>
  );
};

export default Calculator;
