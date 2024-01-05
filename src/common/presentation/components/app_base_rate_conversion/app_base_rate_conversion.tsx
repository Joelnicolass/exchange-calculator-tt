import React from "react";

type Props = {
  fromSymbol: string | number;
  fromAmount: string | number;
  toSymbol: string | number;
  toAmount: string | number;
};

/**
 * Renders the base rate conversion component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.fromSymbol - The symbol of the currency to convert from.
 * @param {number} props.fromAmount - The amount of currency to convert from.
 * @param {string} props.toSymbol - The symbol of the currency to convert to.
 * @param {number} props.toAmount - The amount of currency to convert to.
 * @returns {JSX.Element} The rendered base rate conversion component.
 */
const AppBaseRateConversion = ({
  fromSymbol,
  fromAmount,
  toSymbol,
  toAmount,
}: Props): JSX.Element => {
  return <p>{`${fromSymbol} ${fromAmount} = ${toAmount} ${toSymbol}`}</p>;
};

export default AppBaseRateConversion;
