import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const AppInput = ({ ...props }: Props) => {
  return <input {...props} />;
};

export default AppInput;
