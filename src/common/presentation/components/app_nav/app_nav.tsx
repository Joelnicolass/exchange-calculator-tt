import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const AppNav = ({ children }: Props) => {
  return (
    <nav
      style={{
        padding: "0 1rem",
        height: "60px",
        backgroundColor: "#0e1342",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "fixed",
        top: "0",
        zIndex: 1,
      }}
    >
      {children}
    </nav>
  );
};

export default AppNav;
