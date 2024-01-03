import { Currency } from "../currency/currency.entity";

export class Rate {
  private _baseCurrency: Currency;
  private _rates: Record<Currency["id"], number>[];

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
