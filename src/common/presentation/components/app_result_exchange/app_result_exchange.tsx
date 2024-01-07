import styles from "./app_result_exchange.module.css";

type Props = {
  toText: string;
  fromText: string;
};

/**
 * Component that displays the result of converting one currency to another.
 * @param {string} props.toText - The text representing the converted value.
 * @param {string} props.fromText - The text representing the original value.
 * @returns {JSX.Element} The JSX element displaying the conversion result.
 */
const AppResultExchange = ({ toText, fromText }: Props): JSX.Element => {
  return (
    <section className={styles.result_exchange}>
      <p title={fromText}>{fromText}</p>
      <p title={toText}>{toText}</p>
    </section>
  );
};

export default AppResultExchange;
