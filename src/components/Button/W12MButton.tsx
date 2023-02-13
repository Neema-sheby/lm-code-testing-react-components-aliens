import React from "react";

interface ButtonProp {
  className: string;
  disabled: boolean;
  buttonName: string;
}

const W12Button: React.FC<ButtonProp> = ({
  className,
  disabled,
  buttonName,
}) => {
  return (
    <input
      type="submit"
      className={className}
      value={buttonName}
      disabled={disabled}
    />
  );
};

export default W12Button;
