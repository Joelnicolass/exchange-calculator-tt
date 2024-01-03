import { Currency } from "../currency/currency.entity";

/**
 * Represents a rate entity that contains the base currency and exchange rates.
 */
export class Rate {
  private _baseCurrency: Currency;
  private _rates: Record<Currency["id"], number>[];

  /**
   * Creates a new Rate instance.
   * @param baseCurrency The base currency.
   * @param rates The exchange rates.
   */
  constructor(baseCurrency: Currency, rates: Record<Currency["id"], number>[]) {
    this._baseCurrency = baseCurrency;
    this._rates = rates;
  }
  get baseCurrency(): Currency {
    return this._baseCurrency;
  }

  get rates(): Record<Currency["id"], number>[] {
    return this._rates;
  }
}
