import React from "react";

interface TextBoxProp {
  id: string;
  label: string;
  value: string;
  rows: number;
  cols: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const W12MTextBox: React.FC<TextBoxProp> = ({
  id,
  label,
  value,
  rows,
  cols,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        rows={rows}
        cols={cols}
        onChange={onChange}
      ></textarea>
      ;
    </>
  );
};

export default W12MTextBox;
