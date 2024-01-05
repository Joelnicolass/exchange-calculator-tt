import React from "react";
import ThemeProvider from "../theme_provider/theme.provider";
import ToasterProvider from "../toaster_provider/toaster_provider";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
