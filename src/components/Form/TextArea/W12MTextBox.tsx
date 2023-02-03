import React from "react";

interface TextBoxProp {
  ariaLabel: string;
  id: string;
  label: string;
  value: string | number;
  placeholder: string;
  rows: number;
  cols: number;
  minLength: number;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const W12MTextBox: React.FC<TextBoxProp> = ({
  ariaLabel,
  id,
  label,
  value,
  placeholder,
  rows,
  cols,
  minLength,
  maxLength,
  onChange,
}) => {
  return (
    <div role="textbox" aria-label="inputBox" className="form__input-box">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <textarea
        aria-label={ariaLabel}
        id={id}
        className="form__textArea"
        value={value}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default W12MTextBox;
