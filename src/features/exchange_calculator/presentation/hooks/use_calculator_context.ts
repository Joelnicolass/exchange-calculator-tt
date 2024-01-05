import { useContext } from "react";
import { CalculatorContext } from "../providers/calculator.context";

export const useCalculatorContext = () => useContext(CalculatorContext);
