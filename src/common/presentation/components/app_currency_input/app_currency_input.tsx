import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";

import styles from "./app_currency_input.module.css";

interface Props extends CurrencyInputProps {
  error?: string;
}

/**
 * Component for currency input in the application.
 *
 * @param {object} props - The component properties.
 * @param {string} props.error - The error message to display.
 * @returns {JSX.Element} The JSX element of the component.
 */

const AppCurrencyInput = ({ error, ...props }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <CurrencyInput className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default AppCurrencyInput;
