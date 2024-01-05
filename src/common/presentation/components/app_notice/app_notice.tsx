import React from "react";

import styles from "./app_notice.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode | React.ReactNode[];
}

const AppNotice = ({ children, ...props }: Props) => {
  return (
    <section className={styles.notice} {...props}>
      {children}
    </section>
  );
};

export default AppNotice;
