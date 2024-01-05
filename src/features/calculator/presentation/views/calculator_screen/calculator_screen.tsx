import React from "react";
import FormExchange from "../../components/form_exchange/form_exchange";
import { useCalculatorViewModel } from "../../view_model/calculator.view_model";
import { formatDate } from "../../../../../common/utils";
import Result from "../../components/result/result";
import AppAnchor from "../../../../../common/presentation/components/app_anchor/app_anchor";

const CalculatorScreen = () => {
  const {
    amount,
    currencies,
    fromCurrency,
    toCurrency,
    rates,
    lastUpdated,
    setAmount,
    invertCurrencies,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    calculate,
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

      <Result
        amount={amount}
        currencies={currencies}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        calculate={calculate}
      />

      <div>
        <p>
          1 {currencies.get(fromCurrency)?.symbol} ={" "}
          {currencies.get(toCurrency)?.symbol} {rates?.get(toCurrency)}{" "}
        </p>

        <p>
          1 {currencies.get(toCurrency)?.symbol} ={" "}
          {currencies.get(fromCurrency)?.symbol}{" "}
          {rates?.get(toCurrency) ? 1 / rates.get(toCurrency)! : 0}{" "}
        </p>
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

export default CalculatorScreen;
