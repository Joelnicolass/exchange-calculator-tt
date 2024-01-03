import { CurrencyRepository } from "../../domain/repositories/currency.repository";
import { GetCurrenciesUseCase } from "../../domain/usecases/get_currencies.usecase";
import { GetRatesByBaseCurrencyUseCase } from "../../domain/usecases/get_rates_by_base_currency.usecase";
import { CurrencyVatComplyDataSourceImpl } from "../datasoruces/remote/currency.datasource_impl";
import { CurrencyRepositoryImpl } from "../repositories/currency.repository_impl";

/**
 * Represents a class that provides use cases related to currencies.
 */
class CurrencyUseCases {
  private _repository: CurrencyRepository;

  constructor(repository: CurrencyRepository) {
    this._repository = repository;
  }

  /**
   * Returns a use case for getting all available currencies.
   * @returns The GetCurrenciesUseCase instance.
   */
  get getCurrencies(): GetCurrenciesUseCase {
    return new GetCurrenciesUseCase(this._repository);
  }

  /**
   * Returns a use case for getting exchange rates based on a specific currency.
   * @returns The GetRatesByBaseCurrencyUseCase instance.
   */
  get getRatesByBaseCurrency(): GetRatesByBaseCurrencyUseCase {
    return new GetRatesByBaseCurrencyUseCase(this._repository);
  }
}

/**
 * Creates an instance of the CurrencyUseCases class.
 * @param {CurrencyRepositoryImpl} currencyRepository - The currency repository implementation.
 * @returns {CurrencyUseCases} The CurrencyUseCases instance.
 */
export const currencyUseCases = new CurrencyUseCases(
  new CurrencyRepositoryImpl(new CurrencyVatComplyDataSourceImpl())
);
