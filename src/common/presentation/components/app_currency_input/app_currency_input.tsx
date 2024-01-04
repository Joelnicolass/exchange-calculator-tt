import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";

interface Props extends CurrencyInputProps {}
/**
 * Component for currency input.
 *
 * @param props The component properties - CurrencyInputProps.
 * @returns The currency input component.
 */
const AppCurrencyInput = ({ ...props }: Props) => {
  return (
    <CurrencyInput
      className="
            border
            border-gray-300
            rounded
            px-4
            py-2
            "
      {...props}
    />
  );
};

export default AppCurrencyInput;
