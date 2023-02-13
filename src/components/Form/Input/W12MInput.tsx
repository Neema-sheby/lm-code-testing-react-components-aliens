import { ErrorMessage } from "../../ErrorHandling/ErrorMessage";

interface InputProp {
  id: string;
  label: string;
  ariaLabel: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidate: Array<string>;
}

const W12MInput: React.FC<InputProp> = ({
  id,
  label,
  ariaLabel,
  type,
  value,
  placeholder,
  onChange,
  onValidate,
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
        placeholder={placeholder}
        onChange={onChange}
      />
      <ErrorMessage onValidate={onValidate} />
    </div>
  );
};

export default W12MInput;
