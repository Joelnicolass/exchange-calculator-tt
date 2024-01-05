import { createContext } from "react";
import { Currency } from "../../domain/entities/currency/currency.entity";

export interface CalculatorContextProps {
  amount: string;
  currencies: Map<string, Currency>;
  fromCurrency: string;
  toCurrency: string;
  rates: Map<string, number> | undefined;
  lastUpdated: Date | undefined;
  calculateInverted: () => string | number;
  setAmount: (amount: string) => void;
  invertCurrencies: () => void;
  handleFromCurrencyChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleToCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CalculatorContext = createContext({} as CalculatorContextProps);
