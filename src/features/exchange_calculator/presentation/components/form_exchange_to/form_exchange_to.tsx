import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppSelect from "../../../../../common/presentation/components/app_select/app_select";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

/**
 * Component for the exchange "To" form.
 *
 * @returns The FormExchangeTo component.
 */
const FormExchangeTo = () => {
  const {
    formExchange: { options, toCurrency, handleToCurrencyChange },
    currenciesAndRates: { currencies },
    handlers: { onToCurrencyChange },
  } = useCalculatorContext();

  return (
    <AppLabel text="To">
      <AppSelect
        key={toCurrency}
        value={toCurrency}
        onChange={(e) => {
          const _currency = currencies.get(e.target.value)!;
          handleToCurrencyChange(e);
          onToCurrencyChange(_currency);
        }}
        options={options}
        renderOption={(options) =>
          options.map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.id} - {currency.name}
            </option>
          ))
        }
      />
    </AppLabel>
  );
};

export default FormExchangeTo;
