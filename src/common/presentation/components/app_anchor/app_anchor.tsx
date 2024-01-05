import React from "react";

import styles from "./app_anchor.module.css";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode | React.ReactNode[];
  blank?: boolean;
}

const AppAnchor = ({ blank = false, children, ...props }: Props) => {
  return (
    <a className={styles.anchor} target={blank ? "_blank" : ""} {...props}>
      {children}
    </a>
  );
};

export default AppAnchor;
