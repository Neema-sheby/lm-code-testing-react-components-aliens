import { OptionProp } from "../../Interface";

const W12MOption: React.FC<OptionProp> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export default W12MOption;
