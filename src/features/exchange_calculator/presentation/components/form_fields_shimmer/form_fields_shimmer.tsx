import { ShimmerTitle } from "react-shimmer-effects";

import styles from "./form_fields_shimmer.module.css";
import { useCalculatorContext } from "../../hooks/use_calculator_context";

/**
 * Renders a shimmer effect for form fields.
 * @returns The JSX element representing the form fields shimmer.
 */
const FormFieldsShimmer = () => {
  const {
    shimmer: { formFields },
  } = useCalculatorContext();

  return (
    <div className={styles.container}>
      {Array.from({ length: formFields.lines }).map((_, index) => (
        <ShimmerTitle key={index} line={2} gap={20} />
      ))}
    </div>
  );
};

export default FormFieldsShimmer;
