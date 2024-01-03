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

  const rates = Object.keys(ratesFromApi).map((key) => ({
    [key]: ratesFromApi[key],
  }));

  return new Rate(baseCurrency, rates);
};
