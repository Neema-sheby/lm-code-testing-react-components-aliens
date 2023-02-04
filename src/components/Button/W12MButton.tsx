import React from "react";

interface ButtonProp {
  className: string;
  disabled: boolean;
  children: React.ReactNode;
}

const W12Button: React.FC<ButtonProp> = ({ className, disabled, children }) => {
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default W12Button;
