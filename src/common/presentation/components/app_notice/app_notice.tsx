import React from "react";

import styles from "./app_notice.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Component that represents a important notice in the application.
 *
 * @component
 * @param {object} props - The component properties.
 * @param {ReactNode} props.children - The child elements of the component.
 * @returns {JSX.Element} The notice element.
 */

const AppNotice = ({ children, ...props }: Props): JSX.Element => {
  return (
    <section className={styles.notice} {...props}>
      {children}
    </section>
  );
};

export default AppNotice;
