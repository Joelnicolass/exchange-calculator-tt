import { Currency } from "../../../domain/entities/currency/currency.entity";
import { CurrencyAPIResponse } from "../../types/api.types";

/**
 * Converts a CurrencyAPIResponse object into an array of Currency objects.
 * @param currencyApiResponse The CurrencyAPIResponse object to be converted.
 * @returns An array of Currency objects.
 */
export const currencyApiResponseAdapter = (
  currencyApiResponse: CurrencyAPIResponse
): Map<Currency["id"], Currency> =>
  new Map(
    Object.keys(currencyApiResponse).map((key) => {
      return [
        key,
        new Currency(
          key,
          currencyApiResponse[key].name,
          currencyApiResponse[key].symbol
        ),
      ];
    })
  );
