export interface OptionProp {
  value: string;
  label: React.ReactNode;
}

const W12MOption: React.FC<OptionProp> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export default W12MOption;
