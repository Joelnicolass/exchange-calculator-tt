/**
 * Represents a failure related to currency operations.
 */
export class CurrencyFailure extends Error {
  /**
   * Creates a new instance of CurrencyFailure.
   * @param message The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = "CurrencyFailure";
  }
}
