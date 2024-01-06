import { Either, left, right } from "@sweet-monads/either";
import { Amount } from "../value_objects/amount/amount.value_object";

/**
 * Use case to calculate the inverse exchange rate.
 */
export class CalculateInveseExchangeUseCase {
  /**
   * Executes the inverse exchange rate calculation.
   * @param rate - The exchange rate.
   * @param amount - The amount to calculate the inverse for.
   * @returns Either an error or the calculated inverse exchange rate.
   */
  execute(rate: number, amount: string | number): Either<Error, number> {
    try {
      const result = new Amount(amount).calculateInverted(rate);

      return right(result);
    } catch (error) {
      return left(error as Error);
    }
  }
}
