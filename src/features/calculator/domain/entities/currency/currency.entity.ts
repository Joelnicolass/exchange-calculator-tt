/**
 * Represents a currency.
 */
export class Currency {
  private _id: string;
  private _name: string;
  private _symbol: string;

  /**
   * Creates a new instance of the Currency class.
   * @param id - The unique identifier of the currency.
   * @param name - The name of the currency.
   * @param symbol - The symbol of the currency.
   */
  constructor(name: string, symbol: string, id: string) {
    this._id = id;
    this._name = name;
    this._symbol = symbol;
  }

  get name(): string {
    return this._name;
  }

  get symbol(): string {
    return this._symbol;
  }

  get id(): string {
    return this._id;
  }
}
