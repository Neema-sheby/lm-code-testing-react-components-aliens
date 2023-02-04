///////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { ErrorMessage } from "../../ErrorHandling/ErrorMessage";

///////////////////////////////////////////////////////////////////////////////////////////////////

interface TextBoxProp {
  ariaLabel: string;
  id: string;
  label: string;
  value: string | number;
  placeholder: string;
  rows: number;
  cols: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  errorMessage: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const W12MTextBox: React.FC<TextBoxProp> = ({
  ariaLabel,
  id,
  label,
  value,
  placeholder,
  rows,
  cols,
  onChange,
  errorMessage,
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
        onChange={onChange}
      ></textarea>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default W12MTextBox;
