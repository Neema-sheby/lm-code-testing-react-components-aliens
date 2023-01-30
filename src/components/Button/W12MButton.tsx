import React from "react";

interface ButtonProp {
  children: React.ReactNode;
  onClick: () => void;
}

const W12Button: React.FC<ButtonProp> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default W12Button;
