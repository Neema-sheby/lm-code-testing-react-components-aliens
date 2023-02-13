import {
  MIN_CHAR_SPECIES,
  MAX_CHAR_SPECIES,
  MIN_CHAR_PLANET,
  MAX_CHAR_PLANET,
  MIN_NUM_OF_BEINGS,
  MIN_CHAR_TEXTAREA,
  MAX_CHAR_TEXTAREA,
} from "../../config/Configuration";

import {
  errMsgSpecies,
  errMsgPlanet,
  errMsgNumOfBeings,
  errMsgTwoPlusTwo,
  errMsgReason,
} from "../ErrorHandling/ErrorMessage";

// check character count
const checkNumCharacters = (
  minLength: number,
  maxLength: number,
  str: string
): boolean => {
  const strLen = str.length;
  if (strLen >= minLength && strLen <= maxLength) {
    return true;
  } else {
    return false;
  }
};

// validate species name
export const validateSpeciesName = (data: string): Array<string> => {
  let error = [];
  let isValidString: boolean = false;
  if (!data) {
    error.push(errMsgSpecies.errEmpty);
  }

  if (data.match(/[^$A-Za-z]/g)) {
    error.push(errMsgSpecies.errValidString);
  } else {
    isValidString = true;
  }

  if (
    isValidString &&
    !checkNumCharacters(MIN_CHAR_SPECIES, MAX_CHAR_SPECIES, data)
  ) {
    error.push(errMsgSpecies.errCharCount);
  }
  return error;
};

// validate planet name
export const validatePlanetName = (data: string): Array<string> => {
  let error = [];
  let isValidString: boolean = false;

  if (!data) {
    error.push(errMsgPlanet.errEmpty);
  }

  if (data.match(/[^$A-Za-z0-9]/g)) {
    error.push(errMsgPlanet.errValidString);
  } else {
    isValidString = true;
  }

  if (
    isValidString &&
    !checkNumCharacters(MIN_CHAR_PLANET, MAX_CHAR_PLANET, data)
  ) {
    error.push(errMsgPlanet.errCharCount);
  }
  return error;
};

// // validate Number of beings
export const validateNumberOfBeings = (data: string): Array<string> => {
  let error = [];
  let isValidNumber: boolean = false;

  if (!data) {
    error.push(errMsgNumOfBeings.errEmpty);
  }

  if (data.match(/[^0-9]/g)) {
    error.push(errMsgNumOfBeings.errValidNumber);
  } else {
    isValidNumber = true;
  }
  if (isValidNumber && +data < MIN_NUM_OF_BEINGS) {
    error.push(errMsgNumOfBeings.errNum);
  }
  return error;
};

// validate select - TwoPlusTwo
export const validateTwoPlusTwo = (data: string): Array<string> => {
  let error = [];

  if (!data) {
    error.push(errMsgTwoPlusTwo.errNotSelected);
  }

  if (data === "Not 4") {
    error.push(errMsgTwoPlusTwo.errInvalidAnswer);
  }
  return error;
};

// validate text area -  Reason for sparing
export const validateReason = (data: string): Array<string> => {
  let error = [];

  if (!data) {
    error.push(errMsgReason.errEmpty);
  }

  if (!checkNumCharacters(MIN_CHAR_TEXTAREA, MAX_CHAR_TEXTAREA, data)) {
    error.push(errMsgReason.errCharCount);
  }
  return error;
};
