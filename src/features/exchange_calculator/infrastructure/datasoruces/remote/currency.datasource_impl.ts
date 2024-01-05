import { Either, left, right } from "@sweet-monads/either";
import { CurrencyDataSource } from "../../../domain/datasource/currency.datasource";
import { Currency } from "../../../domain/entities/currency/currency.entity";
import { Rate } from "../../../domain/entities/rate/rate.entity";
import { vatcomplyApi } from "./apis/vatcomply.api";
import { CurrencyFailure } from "../../../domain/entities/failure/currency.failure";
import { currencyApiResponseAdapter } from "../../adapters/vatcomply_api/currency_api_response.adapter";
import { ratesApiResponseAdapter } from "../../adapters/vatcomply_api/rates_api_response.adapter";
import { CurrencyAPIResponse, RatesAPIResponse } from "../../types/api.types";

export class CurrencyVatComplyDataSourceImpl implements CurrencyDataSource {
  /**
   * Retrieves the list of currencies from the remote data source.
   * @returns A promise that resolves to either an Map of Currency objects or an Error.
   */
  async getCurrencies(): Promise<Either<Error, Map<Currency["id"], Currency>>> {
    try {
      const URL_CURRENCIES = "/currencies";

      const response = await vatcomplyApi.get<CurrencyAPIResponse>(
        URL_CURRENCIES
      );

      const currencies = currencyApiResponseAdapter(response.data);

      return right(currencies);
    } catch (error) {
      return left(new CurrencyFailure((error as Error).message));
    }
  }

  /**
   * Retrieves the rates based on the specified base currency.
   * @param baseCurrency The base currency.
   * @returns A promise that resolves to either the rates or an error.
   */
  async getRatesByBaseCurrency(
    baseCurrency: Currency
  ): Promise<Either<Error, Rate>> {
    try {
      const URL_RATES = "/rates";

      const response = await vatcomplyApi.get<RatesAPIResponse>(URL_RATES, {
        params: { base: baseCurrency.id },
      });

      return right(ratesApiResponseAdapter(response.data, baseCurrency));
    } catch (error) {
      return left(new CurrencyFailure((error as Error).message));
    }
  }
}
