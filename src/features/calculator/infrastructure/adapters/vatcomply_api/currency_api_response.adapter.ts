import { Currency } from "../../../domain/entities/currency/currency.entity";
import { CurrencyAPIResponse } from "../../types/api.types";

/**
 * Converts a CurrencyAPIResponse object into an array of Currency objects.
 * @param currencyApiResponse The CurrencyAPIResponse object to be converted.
 * @returns An array of Currency objects.
 */
export const currencyApiResponseAdapter = (
  currencyApiResponse: CurrencyAPIResponse
): Currency[] => {
  const toArrayOfCurrencies = Object.keys(currencyApiResponse).map(
    (key) =>
      new Currency(
        key,
        currencyApiResponse[key].name,
        currencyApiResponse[key].symbol
      )
  );

  return toArrayOfCurrencies;
};
