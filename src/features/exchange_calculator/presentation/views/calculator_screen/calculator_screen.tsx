import React from "react";

import Calculator from "../../components/calculator/calculator";

const CalculatorScreen = () => {
  return (
    <>
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
      <div
        style={{
          width: "100%",
          marginTop: "calc(60px + 3rem)",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "32px",
          }}
        >
          100 EUR to USD - Convert Euros to US Dollars
        </h1>
        <div
          style={{
            marginBottom: "3rem",
          }}
        ></div>
        <Calculator />
      </div>
    </>
  );
};

export default CalculatorScreen;
