import { Currency } from "../../../domain/entities/currency/currency.entity";
import { CurrencyAPIResponse } from "../../types/api.types";

/**
 * Adapts the CurrencyAPIResponse to a Map of Currency objects.
 *
 * @param currencyApiResponse The response from the Currency API.
 * @returns A Map containing Currency objects, where the key is the currency ID.
 */
export const currencyApiResponseAdapter = (
  currencyApiResponse: CurrencyAPIResponse
): Map<Currency["id"], Currency> =>
  new Map(
    Object.entries(currencyApiResponse).map(([key, { name, symbol }]) => [
      key,
      new Currency(key, name, symbol),
    ])
  );
