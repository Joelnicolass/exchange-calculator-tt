import React from "react";
import ThemeProvider from "../theme_provider/theme.provider";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootProvider;
