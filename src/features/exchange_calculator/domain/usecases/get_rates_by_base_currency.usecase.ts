import { Either } from "@sweet-monads/either";
import { CurrencyRepository } from "../repositories/currency.repository";
import { Currency } from "../entities/currency/currency.entity";
import { Rate } from "../entities/rate/rate.entity";

/**
 * Use case for getting rates by base currency.
 */
export class GetRatesByBaseCurrencyUseCase {
  private _repository: CurrencyRepository;

  constructor(repository: CurrencyRepository) {
    this._repository = repository;
  }

  /**
   * Executes the use case to get rates by base currency.
   *
   * @param baseCurrency The base currency.
   * @returns A promise that resolves to either an error or the rate.
   */
  async execute(baseCurrency: Currency): Promise<Either<Error, Rate>> {
    return await this._repository.getRatesByBaseCurrency(baseCurrency);
  }
}
