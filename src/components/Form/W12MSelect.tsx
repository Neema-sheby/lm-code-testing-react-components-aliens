import React from "react";

interface selectProp {
  id: string;
  value: string;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const W12MSelect: React.FC<selectProp> = ({
  id,
  value,
  onChange,
  children,
}) => {
  return (
    <>
      <label htmlFor={id}></label>
      <select id={id} value={value} onChange={onChange}>
        {children}
      </select>
    </>
  );
};

export default W12MSelect;
