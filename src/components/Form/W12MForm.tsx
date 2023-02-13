import React, { useState } from "react";
import W12MInput from "./Input/W12MInput";
import W12MSelect from "./Select/W12MSelect";
import W12MOption from "./Options/W12MOption";
import { OPTIONS } from "./Options/OptionsData";
import W12MTextBox from "./TextArea/W12MTextArea";
import W12MButton from "../Button/W12MButton";
import { W12FormData, initialDataValue } from "./W12MFormDataInterface";

import { ErrorLog, initialErrorLog } from "../ErrorHandling/ErrorMessage";
import {
  validateSpeciesName,
  validatePlanetName,
  validateNumberOfBeings,
  validateTwoPlusTwo,
  validateReason,
} from "../Validation/Validate";

import { TEXTAREA_ROW_NUM, TEXTAREA_COL_NUM } from "../../config/Configuration";

const W12MForm: React.FC = () => {
  const [formData, setFormData] = useState<W12FormData>(initialDataValue);
  const [displayData, setDisplayData] = useState<W12FormData>(initialDataValue);
  const [error, setError] = useState<ErrorLog>(initialErrorLog);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDisplayData(formData);
    setFormData(initialDataValue);
  };

  return (
    <>
      <form className="form" aria-label="W12form-1" onSubmit={onSubmit}>
        <W12MInput
          ariaLabel="Species-name"
          id="Species-name"
          label="Species Name"
          type="text"
          value={formData.species}
          placeholder="Enter the species name"
          onChange={(e) => {
            setError({
              ...error,
              species: validateSpeciesName(e.target.value),
            });
            setFormData({ ...formData, species: e.target.value });
          }}
          onValidate={error.species}
        />

        <W12MInput
          ariaLabel="Planet-name"
          id="Planet-name"
          label="Planet Name"
          type="text"
          value={formData.planet}
          placeholder="Enter the planet name"
          onChange={(e) => {
            setError({
              ...error,
              planet: validatePlanetName(e.target.value),
            });
            setFormData({ ...formData, planet: e.target.value });
          }}
          onValidate={error.planet}
        />

        <W12MInput
          ariaLabel="num-of-beings"
          id="num-of-beings"
          label="Number of beings"
          type="text"
          value={formData.numOfBeings}
          placeholder="Enter the number of Beings"
          onChange={(e) => {
            setError({
              ...error,
              NumOfBeings: validateNumberOfBeings(e.target.value),
            });
            setFormData({ ...formData, numOfBeings: e.target.value });
          }}
          onValidate={error.NumOfBeings}
        />

        <W12MSelect
          ariaLabel="select-what"
          value={formData.twoPlusTwo}
          id="select-what"
          label="What is 2 + 2 ?"
          onChange={(e) => {
            setError({
              ...error,
              twoPlusTwo: validateTwoPlusTwo(e.target.value),
            });
            setFormData({ ...formData, twoPlusTwo: e.target.value });
          }}
          onValidate={error.twoPlusTwo}
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
          value={formData.reasonForSparing}
          placeholder="Enter the reason for sparing"
          rows={TEXTAREA_ROW_NUM}
          cols={TEXTAREA_COL_NUM}
          onChange={(e) => {
            setError({
              ...error,
              reasonForSparing: validateReason(e.target.value),
            });
            setFormData({ ...formData, reasonForSparing: e.target.value });
          }}
          onValidate={error.reasonForSparing}
        ></W12MTextBox>

        <W12MButton
          className="btn--form"
          buttonName="Submit Form"
          disabled={
            formData.species &&
            formData.planet &&
            formData.numOfBeings &&
            error.species.length === 0 &&
            error.planet.length === 0 &&
            error.NumOfBeings.length === 0 &&
            error.twoPlusTwo.length === 0 &&
            error.reasonForSparing.length === 0
              ? false
              : true
          }
        />
      </form>

      {displayData.species &&
        displayData.planet &&
        displayData.numOfBeings &&
        displayData.twoPlusTwo &&
        displayData.reasonForSparing && (
          <div className="form__data">
            <h3>Your Submitted Data</h3>
            <ul className="form__list">
              <li className="form__item">
                <span>Species Name : </span>
                {displayData.species}
              </li>
              <li className="form__item">
                <span>Planet Name : </span>
                {displayData.planet}
              </li>
              <li className="form__item">
                <span>Number of beings : </span>
                {displayData.numOfBeings}
              </li>
              <li className="form__item">
                <span>What is 2 + 2 ? </span>
                {displayData.twoPlusTwo}
              </li>
              <li className="form__item">
                <span>Reason for sparing : </span>
                {displayData.reasonForSparing}
              </li>
            </ul>
          </div>
        )}
    </>
  );
};

export default W12MForm;
