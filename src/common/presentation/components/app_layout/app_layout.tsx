import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const AppLayout = ({ children }: Props) => {
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "40%",
          backgroundColor: "#1a8dff",
          zIndex: -1,
        }}
      />

      <nav
        style={{
          height: "60px",
          backgroundColor: "#0e1342",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "0",
        }}
      ></nav>

      <h1
        style={{
          marginTop: "4rem",
          color: "#fff",
          fontSize: "32px",
        }}
      >
        100 EUR to USD - Convert Euros to US Dollars
      </h1>

      {children}
    </main>
  );
};

export default AppLayout;
