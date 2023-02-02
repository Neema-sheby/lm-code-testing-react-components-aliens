import React from "react";

interface SelectProp {
  ariaLabel: string;
  id: string;
  label: string;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const W12MSelect: React.FC<SelectProp> = ({
  ariaLabel,
  id,
  label,
  onChange,
  children,
}) => {
  return (
    <div role="tree" ria-label="inputBox" className="form__select-box">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <select
        aria-label={ariaLabel}
        className="form__select"
        id={id}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};

export default W12MSelect;
