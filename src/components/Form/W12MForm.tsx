import React, { useState } from "react";
import W12MInput from "./Input/W12MInput";
import W12MSelect from "./Select/W12MSelect";
import W12MOption from "./Options/W12MOption";
import { OPTIONS } from "./Options/OptionsData";
import W12MTextBox from "./TextArea/W12MTextArea";
import W12MButton from "../Button/W12MButton";
import { Data } from "../dataInterface";
import {
  isString,
  checkNumCharacters,
  isStringAndNumberOnly,
  isNumber,
} from "../ErrorHandling/dataValidation";

import {
  MIN_CHAR_SPECIES,
  MAX_CHAR_SPECIES,
  MIN_CHAR_PLANET,
  MAX_CHAR_PLANET,
  MIN_NUM_OF_BEINGS,
  MIN_CHAR_TEXTAREA,
  MAX_CHAR_TEXTAREA,
  TEXTAREA_ROW_NUM,
  TEXTAREA_COL_NUM,
} from "../Configuration";

///////////////////////////////////////////////////////////////////////////////////////////////////

interface FormProp {
  onSubmit: (data: Data) => void;
}

interface ErrorLog {
  errorSpecies: string;
  errorPlanet: string;
  errorNumOfBeings: string;
  errorSelect: string;
  errorTextArea: string;
}

const initialDataValue: Data = {
  species: "",
  planet: "",
  numOfBeings: "",
  select: "",
  text: "",
};

const initialErrorLog: ErrorLog = {
  errorSpecies: "",
  errorPlanet: "",
  errorNumOfBeings: "",
  errorSelect: "",
  errorTextArea: "",
};

const W12MForm: React.FC<FormProp> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Data>(initialDataValue);
  const [displayData, setDisplayData] = useState<Data>(initialDataValue);
  const [errorLog, setErrorLog] = useState<ErrorLog>(initialErrorLog);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorLog(initialErrorLog);
    setDisabled(false);

    if (!formData.species) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorSpecies:
          "Error: Field is empty ! Please enter a valid species name !",
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_SPECIES, MAX_CHAR_SPECIES, formData.species)
    ) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorSpecies:
          "Error: Species name must be between 3 and 23 characters !",
      });
    } else if (!formData.planet) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorPlanet:
          "Error: Field is empty ! Please enter a valid planet name !",
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_PLANET, MAX_CHAR_PLANET, formData.planet)
    ) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorPlanet: "Error: Planet name must be between 2 and 49 characters !",
      });
    } else if (!formData.numOfBeings) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorNumOfBeings:
          "Error: Field is empty ! Please enter a valid Number of beings !",
      });
    } else if (+formData.numOfBeings <= MIN_NUM_OF_BEINGS) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorNumOfBeings:
          "Error: Number of beings must be at least 1,000,000,000 !",
      });
    } else if (!formData.select) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorSelect:
          "Error: Please select the correct answer from the option !",
      });
    } else if (!formData.text) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorTextArea:
          "Error: Field is empty ! Please enter a valid reason for sparing !",
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_TEXTAREA, MAX_CHAR_TEXTAREA, formData.text)
    ) {
      setDisabled(true);
      setErrorLog({
        ...errorLog,
        errorTextArea:
          "Error: Reason for sparing must be between 17 and 153 characters !",
      });
    } else {
      setDisabled(false);
      setErrorLog(initialErrorLog);
      setDisplayData(formData);
      onSubmit(formData);
      setFormData(initialDataValue);
    }
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
          onChange={(e) => {
            setDisabled(false);
            setErrorLog(initialErrorLog);
            isString(e.target.value)
              ? setFormData({ ...formData, species: e.target.value })
              : setErrorLog({
                  ...errorLog,
                  errorSpecies:
                    "Error: Please enter a valid string for species name",
                });
          }}
          errorMessage={errorLog.errorSpecies}
        />

        <W12MInput
          ariaLabel="Planet-name"
          id="Planet-name"
          label="Planet Name"
          type="text"
          value={formData.planet}
          placeholder="Enter the planet name"
          onChange={(e) => {
            setDisabled(false);
            setErrorLog(initialErrorLog);
            isStringAndNumberOnly(e.target.value)
              ? setFormData({ ...formData, planet: e.target.value })
              : setErrorLog({
                  ...errorLog,
                  errorPlanet:
                    "Error: Please enter a valid string for planet name !",
                });
          }}
          errorMessage={errorLog.errorPlanet}
        />

        <W12MInput
          ariaLabel="num-of-beings"
          id="num-of-beings"
          label="Number of Beings"
          type="text"
          value={formData.numOfBeings}
          placeholder="Enter the number of Beings"
          onChange={(e) => {
            setDisabled(false);
            setErrorLog(initialErrorLog);
            isNumber(e.target.value)
              ? setFormData({ ...formData, numOfBeings: e.target.value })
              : setErrorLog({
                  ...errorLog,
                  errorNumOfBeings:
                    "Error: Please enter a valid number of beings !",
                });
          }}
          errorMessage={errorLog.errorNumOfBeings}
        />

        <W12MSelect
          ariaLabel="select-what"
          value={formData.select}
          id="select-what"
          label="What is 2 + 2 ?"
          onChange={(e) => {
            setDisabled(false);
            setErrorLog(initialErrorLog);
            e.target.value === "Not 4"
              ? setErrorLog({
                  ...errorLog,
                  errorSelect:
                    "Error: You selected the wrong answer! You failed !",
                })
              : setFormData({ ...formData, select: e.target.value });
          }}
          errorMessage={errorLog.errorSelect}
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
          onChange={(e) => {
            setDisabled(false);
            setErrorLog(initialErrorLog);
            setFormData({ ...formData, text: e.target.value });
          }}
          errorMessage={errorLog.errorTextArea}
        ></W12MTextBox>
        <W12MButton className="btn--form" disabled={disabled}>
          Submit Form
        </W12MButton>
      </form>
      <ul>
        <li>{displayData.species}</li>
        <li>{displayData.planet}</li>
        <li>{displayData.numOfBeings}</li>
        <li>{displayData.select}</li>
        <li>{displayData.text}</li>
      </ul>
    </>
  );
};

export default W12MForm;
