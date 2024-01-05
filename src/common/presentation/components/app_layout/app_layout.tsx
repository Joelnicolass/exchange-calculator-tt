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
        justifyContent: "space-between",
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
        <h1
          style={{
            color: "#fff",
            fontSize: "18px",
          }}
        >
          Currency exchange
        </h1>
      </nav>

      {children}
    </main>
  );
};

export default AppLayout;
