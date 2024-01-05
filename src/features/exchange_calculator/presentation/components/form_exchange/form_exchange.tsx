import React from "react";
import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppCurrencyInput from "../../../../../common/presentation/components/app_currency_input/app_currency_input";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import { Currency } from "../../../domain/entities/currency/currency.entity";
import { mapToArr } from "../../../../../common/utils";
import AppIconButton from "../../../../../common/presentation/components/app_icon_button/app_icon_button";
import DollarChange from "../../../../../common/presentation/components/icons/dollar_change";

type Props = {
  currencies: Map<string, Currency>;
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  setAmount: (value: string) => void;
  handleFromCurrencyChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleToCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  invertCurrencies: () => void;
};

const FormExchange = ({
  currencies,
  fromCurrency,
  toCurrency,
  amount,
  setAmount,
  handleFromCurrencyChange,
  handleToCurrencyChange,
  invertCurrencies,
}: Props) => {
  const prefix = `${
    currencies.get(fromCurrency)
      ? `  ${currencies.get(fromCurrency)?.symbol}`
      : "$"
  } `;

  const placeholder = `${currencies.get(fromCurrency)?.symbol} 0.00`;

  const options = mapToArr(currencies);

  return (
    <form
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto 0fr auto",
        gridTemplateRows: "auto auto",
        gap: "1rem",
        marginBottom: "1rem",
        alignItems: "flex-end",
      }}
    >
      <AppLabel text="Amount">
        <AppCurrencyInput
          prefix={prefix}
          placeholder={placeholder}
          defaultValue={amount}
          decimalsLimit={2}
          value={amount}
          onValueChange={(value) => setAmount(value!)}
        />
      </AppLabel>

      <AppLabel text="From">
        <AppSelect
          key={fromCurrency}
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
          options={options}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            ))
          }
        />
      </AppLabel>

      <div>
        <AppIconButton
          icon={<DollarChange color="#1a8dff" />}
          onClick={invertCurrencies}
          type="button"
        />
      </div>

      <AppLabel text="To">
        <AppSelect
          key={toCurrency}
          value={toCurrency}
          onChange={handleToCurrencyChange}
          options={options}
          renderOption={(options) =>
            options.map((currency) => (
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            ))
          }
        />
      </AppLabel>
    </form>
  );
};

export default FormExchange;
