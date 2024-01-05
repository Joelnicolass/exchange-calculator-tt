import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";

import styles from "./app_currency_input.module.css";

interface Props extends CurrencyInputProps {
  error?: string;
}
/**
 * Component for currency input.
 *
 * @param props The component properties - CurrencyInputProps.
 * @returns The currency input component.
 */
const AppCurrencyInput = ({ error, ...props }: Props) => {
  return (
    <>
      <CurrencyInput className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default AppCurrencyInput;
