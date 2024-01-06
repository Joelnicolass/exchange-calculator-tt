import { CalculateExchangeUseCase } from "../../domain/usecases/calculate_exchange.usecase";
import { CalculateInveseExchangeUseCase } from "../../domain/usecases/calculate_inverse.usecase";

/**
 * Represents a class that provides use cases related to calculator exchanges.
 */
class CalculatorUseCases {
  /**
   * Returns an instance of the CalculateExchangeUseCase class.
   * @returns {CalculateExchangeUseCase} An instance of the CalculateExchangeUseCase class.
   */
  get calculateExchange(): CalculateExchangeUseCase {
    return new CalculateExchangeUseCase();
  }

  /**
   * Returns an instance of the CalculateInveseExchangeUseCase class.
   * This use case is responsible for calculating the inverse exchange rate.
   * @returns {CalculateInveseExchangeUseCase} An instance of the CalculateInveseExchangeUseCase class.
   */
  get calculateInverseExchange(): CalculateInveseExchangeUseCase {
    return new CalculateInveseExchangeUseCase();
  }
}

/**
 * Calculator use cases instance.
 */
export const calculatorUseCases = new CalculatorUseCases();
