import React from "react";
import { ErrorMessage } from "../../ErrorHandling/ErrorMessage";

interface SelectProp {
  ariaLabel: string;
  value: string;
  id: string;
  label: string;
  options: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onValidate: Array<string>;
}

const W12MSelect: React.FC<SelectProp> = ({
  ariaLabel,
  value,
  id,
  label,
  onChange,
  options,
  onValidate,
}) => {
  return (
    <div role="textbox" aria-label="inputBox" className="form__select-box">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <select
        aria-label={ariaLabel}
        value={value}
        className="form__select"
        id={id}
        onChange={onChange}
      >
        {options}
      </select>
      <ErrorMessage onValidate={onValidate} />
    </div>
  );
};

export default W12MSelect;
