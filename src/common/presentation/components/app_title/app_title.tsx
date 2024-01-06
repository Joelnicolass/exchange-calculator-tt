import React from "react";

import styles from "./app_title.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children?: React.ReactNode | React.ReactNode[];
  color?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Component for the application title.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.color - The color of the title. Default is "black".
 * @param {string} props.size - The size of the title. Default is "xl".
 * @returns {JSX.Element} The JSX element representing the application title.
 */
const AppTitle = ({ children, ...props }: Props): JSX.Element => {
  return (
    <h1
      {...props}
      style={{
        color: props.color || "black",
        ...props.style,
      }}
      className={`${styles.title} ${styles[props.size || "xl"]}`}
    >
      {children}
    </h1>
  );
};

export default AppTitle;
