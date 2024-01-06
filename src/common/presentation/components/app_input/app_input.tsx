import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Component for input in the application.
 */
const AppInput = ({ ...props }: Props) => {
  return <input {...props} />;
};

export default AppInput;
