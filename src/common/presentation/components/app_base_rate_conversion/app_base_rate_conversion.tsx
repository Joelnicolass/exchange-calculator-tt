import React from "react";

type Props = {
  fromSymbol: string | number;
  fromAmount: string | number;
  toSymbol: string | number;
  toAmount: string | number;
};

const AppBaseRateConversion = ({
  fromSymbol,
  fromAmount,
  toSymbol,
  toAmount,
}: Props) => {
  return <p>{`${fromSymbol} ${fromAmount} = ${toAmount} ${toSymbol}`}</p>;
};

export default AppBaseRateConversion;
