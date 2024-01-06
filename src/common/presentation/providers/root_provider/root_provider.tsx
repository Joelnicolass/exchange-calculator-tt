import React from "react";
import ThemeProvider from "../theme_provider/theme.provider";
import ToasterProvider from "../toaster_provider/toaster_provider";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

/**
 * RootProvider component. Compound for other providers.
 *
 * @param children - The child components to be rendered.
 */
const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
