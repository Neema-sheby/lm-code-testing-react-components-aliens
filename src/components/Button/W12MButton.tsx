interface ButtonProp {
  value: string;
  type: string;
  children: React.ReactNode;
}

const W12Button: React.FC<ButtonProp> = ({ value, type, children }) => {
  return <button type={type}>{children}</button>;
};

export default W12Button;
