import React from "react";

interface ButtonProp {
  className: string;
  children: React.ReactNode;
}

const W12Button: React.FC<ButtonProp> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default W12Button;
