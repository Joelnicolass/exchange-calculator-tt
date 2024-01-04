import { Currency } from "../currency/currency.entity";

/**
 * Represents a rate entity that contains the base currency and exchange rates.
 */
export class Rate {
  private _id: string;
  private _rates: Map<Currency["id"], number>;
  private _date: Date;

  /**
   * Represents a Rate entity.
   * @param id - The ID of the rate.
   * @param rates - The map of currency IDs to exchange rates.
   * @param date - The date of the rate.
   */
  constructor(id: string, rates: Map<Currency["id"], number>, date: Date) {
    this._id = id;
    this._rates = rates;
    this._date = date;
  }

  get id(): string {
    return this._id;
  }

  get rates(): Map<Currency["id"], number> {
    return this._rates;
  }

  get date(): Date {
    return this._date;
  }
}
