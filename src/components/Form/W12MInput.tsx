interface InputProp {
  id: string;
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const W12MInput: React.FC<InputProp> = ({
  id,
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </>
  );
};

export default W12MInput;
