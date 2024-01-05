import React from "react";

import styles from "./app_select.module.css";
import ArrowDown from "../icons/arrow_down";

interface Props<OptionType> {
  renderOption: (options: OptionType[]) => JSX.Element[];
  options: OptionType[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Renders a custom select component.
 *
 * @template OptionType - The type of options in the select.
 * @param {Props<OptionType>} props - The props for the select component.
 * @returns {JSX.Element} - The rendered select component.
 */
const AppSelect = <OptionType extends object>({
  options,
  renderOption,
  ...props
}: Props<OptionType>): JSX.Element => {
  return (
    <div className={styles.container}>
      <ArrowDown className={styles.arrow} />

      <select
        className={styles.select}
        aria-label={`Select ${props.value}`}
        {...props}
      >
        {renderOption(options)}
      </select>
    </div>
  );
};

export default AppSelect;
