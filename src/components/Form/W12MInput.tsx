interface InputProp {
  id: string;
  label: string;
  ariaLabel: string;
  type: string;
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const W12MInput: React.FC<InputProp> = ({
  id,
  label,
  ariaLabel,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div role="tree" aria-label="inputBox" className="form__input-box">
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
    </div>
  );
};

export default W12MInput;
