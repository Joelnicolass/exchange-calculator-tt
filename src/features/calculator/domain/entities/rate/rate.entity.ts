import { Currency } from "../currency/currency.entity";

/**
 * Represents a rate entity that contains the base currency and exchange rates.
 */
export class Rate {
  private _baseCurrency: Currency;
  private _rates: Map<Currency["id"], number>;

  /**
   * Represents a Rate entity.
   * @param baseCurrency The base currency for the rates.
   * @param rates A map of currency IDs to their corresponding rates.
   */

  constructor(baseCurrency: Currency, rates: Map<Currency["id"], number>) {
    this._baseCurrency = baseCurrency;
    this._rates = rates;
  }
  get baseCurrency(): Currency {
    return this._baseCurrency;
  }

  get rates(): Map<Currency["id"], number> {
    return this._rates;
  }
}
