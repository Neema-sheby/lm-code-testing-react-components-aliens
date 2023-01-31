import React from "react";

interface ButtonProp {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

const W12Button: React.FC<ButtonProp> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default W12Button;
