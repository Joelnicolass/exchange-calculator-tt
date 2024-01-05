import React from "react";

import Calculator from "../../components/calculator/calculator";

const CalculatorScreen = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "calc(60px + 3rem)",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "32px",
          }}
        >
          100 EUR to USD - Convert Euros to US Dollars lorem
        </h1>
      </div>
      <Calculator />
    </>
  );
};

export default CalculatorScreen;
