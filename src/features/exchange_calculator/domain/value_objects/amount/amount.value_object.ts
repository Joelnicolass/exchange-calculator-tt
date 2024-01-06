/**
 * Represents an amount value object.
 */
export class Amount {
  private amount: number;

  /**
   * Creates a new instance of the Amount class.
   *
   * @param amount - The amount value.
   * @throws Error if the amount is not a valid number.
   */
  constructor(amount: number | string) {
    if (!Amount.ensureValidAmount(amount)) {
      throw new Error("Amount must be greater than 0.00");
    }

    this.amount = Number(amount);
  }

  /**
   * Gets the value of the amount.
   *
   * @returns The amount value.
   */
  public get value(): number {
    return this.amount;
  }

  /**
   * Calculates the amount based on the given rate.
   *
   * @param rate - The exchange rate.
   * @returns The calculated amount.
   */
  public calculate(rate: number): number {
    return this.amount * rate;
  }

  /**
   * Calculates the inverted amount based on the given rate.
   *
   * @param rate - The exchange rate.
   * @returns The calculated inverted amount.
   */
  public calculateInverted(rate: number): number {
    return this.amount / rate;
  }

  /**
   * Ensures that the provided value is a valid amount.
   *
   * @param value - The value to be checked.
   * @returns A boolean indicating whether the value is a valid amount.
   */
  static ensureValidAmount = (value: number | string): boolean => {
    if (!value) return false;

    if (typeof value === "string") {
      value = value.trim();
      if (value === "" || isNaN(Number(value))) {
        return false;
      }
    }
    return Number(value) > 0;
  };
}
