import { useContext } from "react";
import { CalculatorContext } from "../contexts/calculator/calculator.context";

/**
 * Custom hook to access the calculator context.
 * @returns The calculator context.
 */
export const useCalculatorContext = () => useContext(CalculatorContext);
