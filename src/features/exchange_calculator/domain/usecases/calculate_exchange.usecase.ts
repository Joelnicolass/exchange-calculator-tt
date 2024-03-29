import { Either, left, right } from "@sweet-monads/either";
import { Amount } from "../value_objects/amount/amount.value_object";

/**
 * Use case for calculating the exchange amount.
 */
export class CalculateExchangeUseCase {
  /**
   * Executes the calculation of the exchange amount.
   * @param rate - The exchange rate.
   * @param amount - The amount to be exchanged.
   * @returns Either an error or the calculated exchange amount.
   */
  execute(rate: number, amount: string | number): Either<Error, number> {
    try {
      const result = new Amount(amount).calculate(rate);

      return right(result);
    } catch (error) {
      return left(error as Error);
    }
  }
}
