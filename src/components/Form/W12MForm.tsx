import React, { useState } from "react";
import W12MInput from "./W12MInput";
import W12MSelect from "./W12MSelect";
import W12MOption from "./W12MOption";
import W12MTextBox from "./W12MTextBox";
import W12MButton from "../Button/W12MButton";

const W12MForm: React.FC = () => {
  const [species, setSpecies] = useState<string>("");
  const [planet, setPlanet] = useState<string>("");
  const [numOfBeings, setnumOfBeings] = useState<number>(0);
  const [select, setSelect] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (clicked) {
      const data = {
        species: species,
        planet: planet,
        numOfBeings: numOfBeings,
        select: select,
        text: text,
      };
      console.log(data);
      setSpecies("");
      setPlanet("");
      setnumOfBeings(0);
      setSelect("");
      setText("");
      setClicked(false);
    }
  };

  return (
    <section className="section--form">
      <form className="form" onSubmit={(e) => onSubmitHandler(e)}>
        <W12MInput
          id="Species-name"
          label="Species Name"
          type="text"
          value={species}
          placeholder="Enter the species name"
          onChange={(e) => setSpecies(e.target.value)}
        />
        <W12MInput
          id="Planet-name"
          label="Planet Name"
          type="text"
          value={planet}
          placeholder="Enter the planet name"
          onChange={(e) => setPlanet(e.target.value)}
        />
        <W12MInput
          id="num-of-beings"
          label="Number of Beings"
          type="text"
          value={numOfBeings}
          placeholder="Enter the number of Beings"
          onChange={(e) => setnumOfBeings(+e.target.value)}
        />
        <W12MSelect
          id="select"
          label="What is 2 + 2 ?"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <W12MOption value="Not-4">Not 4</W12MOption>
        </W12MSelect>

        <W12MTextBox
          id="reason"
          label="Reason for sparing"
          value={text}
          placeholder="Enter the reason for sparing"
          rows={6}
          cols={100}
          onChange={(e) => setText(e.target.value)}
        ></W12MTextBox>
        <W12MButton className="btn--form" onClick={() => setClicked(true)}>
          Submit Form
        </W12MButton>
      </form>
    </section>
  );
};

export default W12MForm;
