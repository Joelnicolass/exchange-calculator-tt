import React from "react";

type Props = {
  height?: "none" | "sm" | "md" | "lg";
  width?: "none" | "sm" | "md" | "lg";
};

const AppSeparator = ({ width, height }: Props) => {
  const _sizeMap = {
    none: "0",
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
  };

  return (
    <div
      style={{
        height: _sizeMap[height || "none"],
        width: _sizeMap[width || "none"],
      }}
    />
  );
};

export default AppSeparator;
