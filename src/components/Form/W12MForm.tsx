import React, { useState } from "react";
import W12MInput from "./Input/W12MInput";
import W12MSelect from "./Select/W12MSelect";
import W12MOption from "./Options/W12MOption";
import { OPTIONS } from "./Options/OptionsData";
import W12MTextBox from "./TextArea/W12MTextBox";
import W12MButton from "../Button/W12MButton";
import { FormProp, Data } from "../Interface";

import {
  MIN_CHAR_SPECIES,
  MAX_CHAR_SPECIES,
  MIN_CHAR_PLANET,
  MAX_CHAR_PLANET,
  MIN_CHAR_OF_BEINGS,
  MAX_CHAR_OF_BEINGS,
  MIN_CHAR_TEXTAREA,
  MAX_CHAR_TEXTAREA,
  TEXTAREA_ROW_NUM,
  TEXTAREA_COL_NUM,
} from "../Configuration";

const W12MForm: React.FC<FormProp> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Data>({
    species: "",
    planet: "",
    numOfBeings: "",
    select: "",
    text: "",
  });
  const [displayData, setDisplayData] = useState<Data>({
    species: "",
    planet: "",
    numOfBeings: "",
    select: "",
    text: "",
  });
  const [clicked, setClicked] = useState<boolean>(false);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setClicked(true);

    setDisplayData(formData);
    onSubmit(formData);

    setFormData({
      species: "",
      planet: "",
      numOfBeings: "",
      select: "",
      text: "",
    });
  };

  return (
    <>
      <form className="form" aria-label="W12form-1" onSubmit={onSubmitHandler}>
        <W12MInput
          ariaLabel="Species-name"
          id="Species-name"
          label="Species Name"
          type="text"
          value={formData.species}
          placeholder="Enter the species name"
          minLength={MIN_CHAR_SPECIES}
          maxLength={MAX_CHAR_SPECIES}
          onChange={(e) =>
            setFormData({ ...formData, species: e.target.value })
          }
        />

        <W12MInput
          ariaLabel="Planet-name"
          id="Planet-name"
          label="Planet Name"
          type="text"
          value={formData.planet}
          placeholder="Enter the planet name"
          minLength={MIN_CHAR_PLANET}
          maxLength={MAX_CHAR_PLANET}
          onChange={(e) => setFormData({ ...formData, planet: e.target.value })}
        />
        <W12MInput
          ariaLabel="num-of-beings"
          id="num-of-beings"
          label="Number of Beings"
          type="text"
          value={formData.numOfBeings}
          placeholder="Enter the number of Beings"
          minLength={MIN_CHAR_OF_BEINGS}
          maxLength={MAX_CHAR_OF_BEINGS}
          onChange={(e) =>
            setFormData({ ...formData, numOfBeings: e.target.value })
          }
        />

        <W12MSelect
          ariaLabel="select-what"
          value={formData.select}
          id="select-what"
          label="What is 2 + 2 ?"
          onChange={(e) => setFormData({ ...formData, select: e.target.value })}
        >
          {OPTIONS.map((option, i) => {
            return (
              <W12MOption key={i + option.value} value={option.value}>
                {option.label}
              </W12MOption>
            );
          })}
        </W12MSelect>

        <W12MTextBox
          ariaLabel="textArea-reason"
          id="textArea-reason"
          label="Reason for sparing"
          value={formData.text}
          placeholder="Enter the reason for sparing"
          rows={TEXTAREA_ROW_NUM}
          cols={TEXTAREA_COL_NUM}
          minLength={MIN_CHAR_TEXTAREA}
          maxLength={MAX_CHAR_TEXTAREA}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        ></W12MTextBox>
        <W12MButton className="btn--form">Submit Form</W12MButton>
      </form>
      {clicked ? (
        <ul>
          <li>{displayData.species}</li>
          <li>{displayData.planet}</li>
          <li>{displayData.numOfBeings}</li>
          <li>{displayData.select}</li>
          <li>{displayData.text}</li>
        </ul>
      ) : null}
    </>
  );
};

export default W12MForm;
