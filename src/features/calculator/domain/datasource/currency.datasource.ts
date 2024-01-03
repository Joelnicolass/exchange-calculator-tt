import { Either } from "@sweet-monads/either";
import { Currency } from "../entities/currency/currency.entity";
import { Rate } from "../entities/rate/rate.entity";

/**
 * Represents a data source for retrieving currency information.
 */
export interface CurrencyDataSource {
  getCurrencies(): Promise<Either<Error, Map<Currency["id"], Currency>>>;
  getRatesByBaseCurrency(baseCurrency: Currency): Promise<Either<Error, Rate>>;
}
