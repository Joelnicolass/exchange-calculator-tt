import { Either } from "@sweet-monads/either";
import { CurrencyRepository } from "../repositories/currency.repository";
import { Currency } from "../entities/currency/currency.entity";

/**
 * Use case for getting currencies.
 */
export class GetCurrenciesUseCase {
  private _repository: CurrencyRepository;

  constructor(repository: CurrencyRepository) {
    this._repository = repository;
  }

  /**
   * Executes the use case.
   * @returns {Promise<Either<Error, Currency[]>>} The promise with either an error or an array of currencies.
   */
  async execute(): Promise<Either<Error, Currency[]>> {
    return await this._repository.getCurrencies();
  }
}
