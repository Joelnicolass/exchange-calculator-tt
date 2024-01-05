import React from "react";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const ToasterProvider = ({ children }: Props) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default ToasterProvider;
