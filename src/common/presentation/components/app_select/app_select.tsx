import React from "react";
import ArrowDown from "../icons/arrow_down";

interface Props<OptionType>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  renderOption: (options: OptionType[]) => JSX.Element[];
  options: OptionType[];
}

/**
 * Select component.
 *
 * @component
 * @param {Object} options - The selection options.
 * @param {Function} renderOption - The option component renderer.
 * @param {...any} props - Other select component properties.
 * @returns {JSX.Element} The selection component.
 */
const AppSelect = <OptionType extends object>({
  options,
  renderOption,
  ...props
}: Props<OptionType>): JSX.Element => {
  return (
    <div
      className="
      relative
    "
    >
      <ArrowDown
        className="
          absolute
          right-3
          top-1/2
          transform
          -translate-y-1/2
          pointer-events-none
        "
      />
      <select
        className="
          border
          border-gray-300
          rounded
          px-4
          py-2
          appearance-none
          focus:outline-none
          transition
          duration-400
          ease-in-out
          font-semibold
          min-w-64
      "
        {...props}
      >
        {renderOption(options)}
      </select>
    </div>
  );
};

export default AppSelect;
