import { useState } from "react";
import {
  INITIAL_STATE_AMOUNT,
  INITIAL_STATE_FROM,
  INITIAL_STATE_TO,
} from "../constants";

export const useTitle = () => {
  const [titleAmount, setTitleAmount] = useState(INITIAL_STATE_AMOUNT);

  const [titleCurrencyIDFrom, setTitleCurrencyFrom] =
    useState(INITIAL_STATE_FROM);

  const [titleCurrencyIDTo, setTitleCurrencyTo] = useState(INITIAL_STATE_TO);

  const [titleCurrencyNameFrom, setTitleCurrencyNameFrom] =
    useState(INITIAL_STATE_FROM);

  const [titleCurrencyNameTo, setTitleCurrencyNameTo] =
    useState(INITIAL_STATE_TO);

  const title = `${titleAmount} ${titleCurrencyIDFrom} to ${titleCurrencyIDTo} - Convert ${titleCurrencyNameFrom} to ${titleCurrencyNameTo}`;

  const changeTitleAmount = (amount: string) => setTitleAmount(amount);

  const changeTitleCurrencyFrom = (
    currencyID: string,
    currencyName: string
  ) => {
    setTitleCurrencyFrom(currencyID);
    setTitleCurrencyNameFrom(currencyName);
  };

  const changeTitleCurrencyTo = (currencyID: string, currencyName: string) => {
    setTitleCurrencyTo(currencyID);
    setTitleCurrencyNameTo(currencyName);
  };

  return {
    title,
    changeTitleAmount,
    changeTitleCurrencyFrom,
    changeTitleCurrencyTo,
  };
};
