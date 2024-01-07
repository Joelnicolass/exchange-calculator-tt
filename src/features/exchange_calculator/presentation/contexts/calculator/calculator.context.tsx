import { createContext } from "react";
import { useCurrenciesAndRates } from "../../hooks/use_currencies_and_rates";
import { useFormExchange } from "../../hooks/use_form_exchange";
import { useResultExchange } from "../../hooks/use_result_exchange";
import { useNotice } from "../../hooks/use_notice";
import { Currency } from "../../../domain/entities/currency/currency.entity";

export type CalculatorViewModel = {
  currenciesAndRates: ReturnType<typeof useCurrenciesAndRates>;
  formExchange: ReturnType<typeof useFormExchange>;
  resultExchange: ReturnType<typeof useResultExchange>;
  notice: ReturnType<typeof useNotice>;
  handlers: {
    onAmountChange: (amount: number | string) => void;
    onFromCurrencyChange: (currency: Currency) => void;
    onToCurrencyChange: (currency: Currency) => void;
  };
};

/**
 * This file contains the implementation of the calculator context provider.
 * The calculator context provider is responsible for managing the state and logic related to the exchange calculator feature.
 */
export const CalculatorContext = createContext({} as CalculatorViewModel);
