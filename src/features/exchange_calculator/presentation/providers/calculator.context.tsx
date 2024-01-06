import { createContext } from "react";
import { useCurrenciesAndRates } from "../hooks/use_currencies_and_rates";
import { useFormExchange } from "../hooks/use_form_exchange";
import { useResultExchange } from "../hooks/use_result_exchange";
import { useNotice } from "../hooks/use_notice";

export type CalculatorViewModel = {
  currenciesAndRates: ReturnType<typeof useCurrenciesAndRates>;
  formExchange: ReturnType<typeof useFormExchange>;
  resultExchange: ReturnType<typeof useResultExchange>;
  notice: ReturnType<typeof useNotice>;
};

export const CalculatorContext = createContext({} as CalculatorViewModel);
