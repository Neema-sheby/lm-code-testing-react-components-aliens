import React, { useState } from "react";
import W12MInput from "./W12MInput";
import W12MSelect from "./W12MSelect";
import W12MOption from "./W12MOption";
import W12MTextBox from "./W12MTextBox";
import W12MButton from "../Button/W12MButton";
import { Data } from "../Interface";

interface FormProp {
  setData: (data: Data) => void;
}

const W12MForm: React.FC<FormProp> = ({ setData }) => {
  const [species, setSpecies] = useState<string>("");
  const [planet, setPlanet] = useState<string>("");
  const [numOfBeings, setnumOfBeings] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [text, setText] = useState<string>("");

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = {
      species: species,
      planet: planet,
      numOfBeings: numOfBeings,
      select: select,
      text: text,
    };
    setData(data);
    // setSpecies("");
    // setPlanet("");
    // setnumOfBeings("");
    // setSelect("");
    // setText("");
  };

  return (
    <form className="form" aria-label="W12form-1" onSubmit={onSubmitHandler}>
      <W12MInput
        ariaLabel="Species-name"
        id="Species-name"
        label="Species Name"
        type="text"
        value={species}
        placeholder="Enter the species name"
        onChange={(e) => setSpecies(e.target.value)}
      />

      <W12MInput
        ariaLabel="Planet-name"
        id="Planet-name"
        label="Planet Name"
        type="text"
        value={planet}
        placeholder="Enter the planet name"
        onChange={(e) => setPlanet(e.target.value)}
      />
      <W12MInput
        ariaLabel="num-of-beings"
        id="num-of-beings"
        label="Number of Beings"
        type="text"
        value={numOfBeings}
        placeholder="Enter the number of Beings"
        onChange={(e) => setnumOfBeings(e.target.value)}
      />
      <W12MSelect
        ariaLabel="select-what"
        id="select-what"
        label="What is 2 + 2 ?"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <W12MOption value="">Choose the correct answer</W12MOption>
        <W12MOption value="4">4</W12MOption>
        <W12MOption value="Not 4">Not 4</W12MOption>
      </W12MSelect>

      <W12MTextBox
        ariaLabel="textArea-reason"
        id="textArea-reason"
        label="Reason for sparing"
        value={text}
        placeholder="Enter the reason for sparing"
        rows={6}
        cols={100}
        onChange={(e) => setText(e.target.value)}
      ></W12MTextBox>
      <W12MButton className="btn--form">Submit Form</W12MButton>
    </form>
  );
};

export default W12MForm;
