import React from "react";
import styles from "./form_exchange.module.css";
import FormExchangeAmount from "../form_exchange_amount/form_exchange_amount";
import FormExchangeInvert from "../form_exchange_invert/form_exchange_invert";
import FormExchangeFrom from "../form_exchange_from/form_exchange_from";
import FormExchangeTo from "../form_exchange_to/form_exchange_to";
import { useCalculatorContext } from "../../hooks/use_calculator_context";
import FormFieldsShimmer from "../form_fields_shimmer/form_fields_shimmer";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * FormExchange component. Compound Component Pattern.
 *
 * @component
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const FormExchange = ({ children }: Props) => {
  const {
    currenciesAndRates: { isCurrenciesLoading },
  } = useCalculatorContext();

  /**
   * Renders a loading shimmer component if currencies are still loading.
   *
   * @returns The loading shimmer component.
   */
  if (isCurrenciesLoading) return <FormFieldsShimmer />;

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {children}
    </form>
  );
};

/**
 * Represents the ConversionAndNotice component.
 * @memberof FormExchange
 * @type {React.ComponentType}
 */
FormExchange.Amount = FormExchangeAmount;

/**
 * Represents the ConversionAndNotice component.
 * @memberof FormExchange
 * @type {React.ComponentType}
 */
FormExchange.Invert = FormExchangeInvert;

/**
 * Represents the ConversionAndNotice component.
 * @memberof FormExchange
 * @type {React.ComponentType}
 */
FormExchange.From = FormExchangeFrom;

/**
 * Represents the ConversionAndNotice component.
 * @memberof FormExchange
 * @type {React.ComponentType}
 */
FormExchange.To = FormExchangeTo;

export default FormExchange;
