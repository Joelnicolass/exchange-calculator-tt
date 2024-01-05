import React from "react";

import styles from "./app_label.module.css";

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode | React.ReactNode[];
  text: string;
}

/**
 * Component for a label with text and secondary content.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text of the label.
 * @param {ReactNode} props.children - The secondary content of the label - recommended to be an input.
 * @returns {JSX.Element} The label component with text and secondary content.
 */
const AppLabel = ({ text, children, ...props }: Props): JSX.Element => {
  return (
    <label className={styles.label} {...props}>
      {text}
      {children}
    </label>
  );
};

export default AppLabel;
