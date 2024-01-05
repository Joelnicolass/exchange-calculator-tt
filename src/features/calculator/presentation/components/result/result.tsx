import React from "react";

import { Currency } from "../../../domain/entities/currency/currency.entity";

type Props = {
  amount: string;
  currencies: Map<string, Currency>;
  fromCurrency: string;
  toCurrency: string;
  calculate: () => number | undefined;
};

const Result = ({
  amount,
  currencies,
  fromCurrency,
  toCurrency,
  calculate,
}: Props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "32px",
        fontWeight: "600",
      }}
    >
      <p>
        {amount} {currencies.get(fromCurrency)?.name} =
      </p>
      <p>
        {calculate()} {currencies.get(toCurrency)?.name}
      </p>
    </section>
  );
};

export default Result;
