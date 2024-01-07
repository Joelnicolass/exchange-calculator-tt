import React from "react";

import styles from "./app_nav.module.css";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
/**
 * Component for application navigation.
 *
 * @param children The child elements of the component.
 */
const AppNav = ({ children }: Props) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export default AppNav;
