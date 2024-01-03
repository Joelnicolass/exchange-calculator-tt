import { Either } from "@sweet-monads/either";
import { Currency } from "../entities/currency/currency.entity";
import { Rate } from "../entities/rate/rate.entity";

/**
 * Represents a repository for managing currencies.
 */
export interface CurrencyRepository {
  getCurrencies(): Promise<Either<Error, Currency[]>>;
  getRatesByBaseCurrency(baseCurrency: Currency): Promise<Either<Error, Rate>>;
}
