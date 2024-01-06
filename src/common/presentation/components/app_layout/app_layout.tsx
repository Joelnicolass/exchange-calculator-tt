import React from "react";
import AppNav from "../app_nav/app_nav";
import AppTitle from "../app_title/app_title";

import styles from "./app_layout.module.css";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const AppLayout = ({ children }: Props) => {
  return (
    <main className={styles.container}>
      <AppNav>
        <AppTitle size="md" color="white">
          Currency exchange
        </AppTitle>
      </AppNav>

      {children}
    </main>
  );
};

export default AppLayout;
