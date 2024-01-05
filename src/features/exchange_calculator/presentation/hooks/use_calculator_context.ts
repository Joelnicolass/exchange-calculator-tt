import { useContext } from "react";
import { CalculatorContext } from "../providers/calculator.context";

/**
 * Custom hook to access the calculator context.
 * @returns The calculator context.
 */
export const useCalculatorContext = () => useContext(CalculatorContext);
