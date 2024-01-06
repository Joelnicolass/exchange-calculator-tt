import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

/**
 * Provides the theme for the application.
 *
 * @param children - The child components to be wrapped by the theme provider.
 */
const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default ThemeProvider;
