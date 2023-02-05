import React, { useState } from "react";
import W12MInput from "./Input/W12MInput";
import W12MSelect from "./Select/W12MSelect";
import W12MOption from "./Options/W12MOption";
import { OPTIONS } from "./Options/OptionsData";
import W12MTextBox from "./TextArea/W12MTextArea";
import W12MButton from "../Button/W12MButton";
import { Data, initialDataValue } from "./W12MFormDataInterface";
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

import {
  ErrorLog,
  initialErrorLog,
  errMsgSpecies,
  errMsgPlanet,
  errMsgNumOfBeings,
  errMsgSelect,
  errMsgTextArea,
} from "../ErrorHandling/ErrorMessage";

///////////////////////////////////////////////////////////////////////////////////////////////////

interface FormProp {
  onSubmit: (data: Data) => void;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

const W12MForm: React.FC<FormProp> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Data>(initialDataValue);
  const [displayData, setDisplayData] = useState<Data>(initialDataValue);
  const [errorLog, setErrorLog] = useState<ErrorLog>(initialErrorLog);
  const [disabled, setDisabled] = useState<boolean>(false);

  // display the error messages
  const displayError = (error: ErrorLog): void => {
    setDisabled(true);
    setErrorLog(error);
  };

  // function called on submitting form
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorLog(initialErrorLog);
    setDisabled(false);

    if (!formData.species) {
      displayError({
        ...errorLog,
        errorSpecies: errMsgSpecies.errEmpty,
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_SPECIES, MAX_CHAR_SPECIES, formData.species)
    ) {
      displayError({
        ...errorLog,
        errorSpecies: errMsgSpecies.errCharCount,
      });
    } else if (!formData.planet) {
      displayError({
        ...errorLog,
        errorPlanet: errMsgPlanet.errEmpty,
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_PLANET, MAX_CHAR_PLANET, formData.planet)
    ) {
      displayError({
        ...errorLog,
        errorPlanet: errMsgPlanet.errCharCount,
      });
    } else if (!formData.numOfBeings) {
      displayError({
        ...errorLog,
        errorNumOfBeings: errMsgNumOfBeings.errValidNumber,
      });
    } else if (+formData.numOfBeings < MIN_NUM_OF_BEINGS) {
      displayError({
        ...errorLog,
        errorNumOfBeings: errMsgNumOfBeings.errNum,
      });
    } else if (!formData.select) {
      displayError({
        ...errorLog,
        errorSelect: errMsgSelect.errNotSelected,
      });
    } else if (!formData.text) {
      displayError({
        ...errorLog,
        errorTextArea: errMsgTextArea.errEmpty,
      });
    } else if (
      !checkNumCharacters(MIN_CHAR_TEXTAREA, MAX_CHAR_TEXTAREA, formData.text)
    ) {
      displayError({
        ...errorLog,
        errorTextArea: errMsgTextArea.errCharCount,
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
                  errorSpecies: errMsgSpecies.errValidString,
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
                  errorPlanet: errMsgPlanet.errValidString,
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
                  errorNumOfBeings: errMsgNumOfBeings.errValidNumber,
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
                  errorSelect: errMsgSelect.errInvalidAnswer,
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
        <W12MButton
          className="btn--form"
          buttonName="Submit Form"
          disabled={disabled}
        />
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
