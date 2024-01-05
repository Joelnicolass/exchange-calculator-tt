import React from "react";
import { CalculatorContext } from "./calculator.context";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const CalculatorProvider = ({ children }: Props) => {
  return (
    <CalculatorContext.Provider value={{}}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
