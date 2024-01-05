import React from "react";

type Props = {
  toText: string;
  fromText: string;
};

const AppResultExchange = ({ toText, fromText }: Props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontSize: "32px",
        fontWeight: "600",
      }}
    >
      <p>{fromText}</p>
      <p>{toText}</p>
    </section>
  );
};

export default AppResultExchange;
