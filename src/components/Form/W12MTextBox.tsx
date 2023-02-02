import React from "react";

interface TextBoxProp {
  ariaLabel: string;
  id: string;
  label: string;
  value: string;
  placeholder: string;
  rows: number;
  cols: number;
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
  onChange,
}) => {
  return (
    <div role="tree" aria-label="inputBox" className="form__input-box">
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
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default W12MTextBox;
