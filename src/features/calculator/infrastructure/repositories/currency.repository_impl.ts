import { Either } from "@sweet-monads/either";
import { Currency } from "../../domain/entities/currency/currency.entity";
import { Rate } from "../../domain/entities/rate/rate.entity";
import { CurrencyRepository } from "../../domain/repositories/currency.repository";
import { CurrencyDataSource } from "../../domain/datasource/currency.datasource";

export class CurrencyRepositoryImpl implements CurrencyRepository {
  private _datasource: CurrencyDataSource;

  /**
   * Constructs a new instance of the CurrencyRepositoryImpl class.
   * @param {CurrencyDataSource} datasource - The data source for the currency repository.
   */
  constructor(datasource: CurrencyDataSource) {
    this._datasource = datasource;
  }

  /**
   * Retrieves the list of currencies.
   * @returns A promise that resolves to either an error or an Map of Currency objects.
   */
  async getCurrencies(): Promise<Either<Error, Map<Currency["id"], Currency>>> {
    return await this._datasource.getCurrencies();
  }

  /**
   * Retrieves the rates based on the specified base currency.
   * @param baseCurrency The base currency.
   * @returns A promise that resolves to either an error or the rates.
   */
  async getRatesByBaseCurrency(
    baseCurrency: Currency
  ): Promise<Either<Error, Rate>> {
    return await this._datasource.getRatesByBaseCurrency(baseCurrency);
  }
}
