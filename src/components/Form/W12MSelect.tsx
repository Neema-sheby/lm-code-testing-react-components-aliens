import React from "react";

interface SelectProp {
  id: string;
  label: string;
  value: string;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const W12MSelect: React.FC<SelectProp> = ({
  id,
  label,
  value,
  onChange,
  children,
}) => {
  return (
    <div className="form__input-box">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form__select"
        id={id}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};

export default W12MSelect;
