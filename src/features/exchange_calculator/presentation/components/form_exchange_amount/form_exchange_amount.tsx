import AppLabel from "../../../../../common/presentation/components/app_label/app_label";
import AppCurrencyInput from "../../../../../common/presentation/components/app_currency_input/app_currency_input";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import { DECIMAL_LIMIT, MAX_LENGTH_AMOUNT } from "../../constants";

/**
 * Component for rendering the form input for the exchange amount.
 *
 * @returns The rendered JSX element.
 */
const FormExchangeAmount = () => {
  const {
    formExchange: {
      form,
      prefix,
      amount,
      placeholder,
      FormExchangeFields,
      handleReset,
      handleValueChange,
    },

    handlers: { onAmountChange },
  } = useCalculatorContext();

  return (
    <AppLabel text="Amount">
      <AppCurrencyInput
        name={FormExchangeFields.amount}
        value={amount}
        decimalsLimit={DECIMAL_LIMIT}
        maxLength={MAX_LENGTH_AMOUNT}
        defaultValue={amount}
        placeholder={placeholder}
        prefix={prefix}
        onValueChange={(value) => {
          handleValueChange(value);
          onAmountChange(value || 0);
        }}
        onBlur={form.handleBlur}
        error={form.errors.amount}
        onClick={() => {
          handleReset();
          onAmountChange(0);
        }}
        /* 
        Is possible configure the input to allow negative values.
        
        allowNegativeValue={false}
      */
      />
    </AppLabel>
  );
};

export default FormExchangeAmount;
