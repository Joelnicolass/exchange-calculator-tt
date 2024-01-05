export type RatesAPIResponse = {
  date: string;
  base: string;
  rates: {
    [key: string]: number;
  };
};

export type CurrencyAPIResponse = {
  [key: string]: { name: string; symbol: string };
};
