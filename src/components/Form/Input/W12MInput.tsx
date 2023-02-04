///////////////////////////////////////////////////////////////////////////////////////////////////

import { ErrorMessage } from "../../ErrorHandling/ErrorMessage";

///////////////////////////////////////////////////////////////////////////////////////////////////

interface InputProp {
  id: string;
  label: string;
  ariaLabel: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const W12MInput: React.FC<InputProp> = ({
  id,
  label,
  ariaLabel,
  type,
  value,
  placeholder,
  onChange,
  errorMessage,
}) => {
  return (
    <div role="textbox" aria-label="inputBox" className="form__input-box">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <input
        aria-label={ariaLabel}
        className="form__input"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default W12MInput;
