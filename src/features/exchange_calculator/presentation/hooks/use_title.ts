import { useState } from "react";
import {
  INITIAL_STATE_AMOUNT,
  INITIAL_STATE_FROM,
  INITIAL_STATE_TO,
  INITIAl_STATE_NAME_FROM,
  INITIAl_STATE_NAME_TO,
} from "../constants";
import { Currency } from "../../domain/entities/currency/currency.entity";

export const useTitle = () => {
  const [fromCurrencyId, setFromCurrencyId] = useState(INITIAL_STATE_FROM);
  const [toCurrencyId, setToCurrencyId] = useState(INITIAL_STATE_TO);
  const [fromCurrencyName, setFromCurrencyName] = useState(
    INITIAl_STATE_NAME_FROM
  );
  const [toCurrencyName, setToCurrencyName] = useState(INITIAl_STATE_NAME_TO);
  const [amountTitle, setAmountTitle] = useState<string | number>(
    INITIAL_STATE_AMOUNT
  );

  const formatTitle = () => {
    const isPlural = Number(amountTitle) > 1 ? "s" : "";

    return `${amountTitle} ${fromCurrencyId} to ${toCurrencyId} - Convert ${fromCurrencyName}${isPlural} to ${toCurrencyName}${isPlural}`;
  };

  const updateAmountTitle = (amount: string | number) => {
    setAmountTitle(amount);
  };

  const updateFromCurrency = (currency: Currency) => {
    setFromCurrencyId(currency.id);
    setFromCurrencyName(currency.name);
  };

  const updateToCurrency = (currency: Currency) => {
    setToCurrencyId(currency.id);
    setToCurrencyName(currency.name);
  };

  return {
    formatTitle,
    update: {
      amountTitle: updateAmountTitle,
      fromCurrency: updateFromCurrency,
      toCurrency: updateToCurrency,
    },
  };
};
