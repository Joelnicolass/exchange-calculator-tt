import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default ThemeProvider;
