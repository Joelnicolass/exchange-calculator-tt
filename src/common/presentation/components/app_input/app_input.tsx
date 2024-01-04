import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const AppInput = ({ ...props }: Props) => {
  return (
    <input
      className="
      border rounded h-10 border-solid border-[#ccc]      
      "
      {...props}
    />
  );
};

export default AppInput;
