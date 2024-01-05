import React from "react";

import styles from "./app_anchor.module.css";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
  blank?: boolean;
}

/**
 * Anchor component for the app.
 *
 * @param {boolean} blank - Whether to open the link in a new tab.
 * @param {ReactNode} children - The content of the anchor.
 * @param {React.HTMLProps<HTMLAnchorElement>} props - Additional props for the anchor element.
 * @returns {React.ReactElement} The rendered anchor component.
 */
const AppAnchor = ({
  blank = false,
  children,
  ...props
}: Props): React.ReactElement => {
  return (
    <a className={styles.anchor} target={blank ? "_blank" : ""} {...props}>
      {children}
    </a>
  );
};

export default AppAnchor;
