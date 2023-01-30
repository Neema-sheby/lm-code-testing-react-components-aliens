import { useState } from "react";
import W12MInput from "./W12MInput";
import W12MSelect from "./W12MSelect";
import W12MOption from "./W12MOption";
import W12MTextBox from "./W12MTextBox";
import W12MButton from "../Button/W12MButton";

const W12MForm = () => {
  const [species, setSpecies] = useState<string>("");
  const [planet, setPlanet] = useState<string>("");
  const [numOfBeings, setnumOfBeings] = useState<number>(0);
  const [select, setSelect] = useState<string>("");
  const [text, setText] = useState<string>("");

  return (
    <section className="w12MForm">
      <form>
        <W12MInput
          id="Species-name"
          label="Species Name"
          type="text"
          value={species}
          onChange={(e) => {
            console.log(e.target.value);
            setSpecies(e.target.value);
          }}
        />
        <W12MInput
          id="Planet-name"
          label="Planet Name"
          type="text"
          value={planet}
          onChange={(e) => {
            console.log(e.target.value);
            setPlanet(e.target.value);
          }}
        />
        <W12MInput
          id="num-of-beings"
          label="Number of Beings"
          type="number"
          value={numOfBeings}
          onChange={(e) => {
            console.log(e.target.value);
            setnumOfBeings(+e.target.value);
          }}
        />
        <W12MSelect
          id="select"
          value={select}
          onChange={(e) => {
            console.log(e.target.value);
            setSelect(e.target.value);
          }}
        >
          <W12MOption value="Not-4">Not 4</W12MOption>
        </W12MSelect>

        <W12MTextBox
          id="reason"
          label="Reason for sparing"
          value={text}
          rows={6}
          cols={100}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        ></W12MTextBox>
        <W12MButton type="submit" value="Submit">
          Submit Form
        </W12MButton>
      </form>
    </section>
  );
};

export default W12MForm;
