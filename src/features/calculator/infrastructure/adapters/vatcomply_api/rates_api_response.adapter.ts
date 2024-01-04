import { Currency } from "../../../domain/entities/currency/currency.entity";
import { Rate } from "../../../domain/entities/rate/rate.entity";
import { RatesAPIResponse } from "../../types/api.types";

/**
 * Adapts the RatesAPIResponse to a Rate object.
 *
 * @param ratesApiResponse - The response from the Rates API.
 * @param baseCurrency - The base currency for the rates.
 * @returns The adapted Rate object.
 */
export const ratesApiResponseAdapter = (
  ratesApiResponse: RatesAPIResponse,
  baseCurrency: Currency
): Rate => {
  const ratesFromApi = ratesApiResponse.rates;

  const rates = new Map<string, number>(
    Object.entries(ratesFromApi).map(([currencyCode, rate]) => [
      currencyCode,
      rate,
    ])
  );

  const date = new Date(ratesApiResponse.date);

  return new Rate(baseCurrency.id, rates, date);
};
