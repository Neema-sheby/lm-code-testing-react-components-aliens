import {
  validateSpeciesName,
  validatePlanetName,
  validateNumberOfBeings,
  validateTwoPlusTwo,
  validateReason,
} from "./Validate";

describe("Checking if the data entered in the species name input field is valid", () => {
  test("returns [⛔️ Error : Please enter a valid string !] for entering a number", () => {
    expect(validateSpeciesName("5")).toStrictEqual([
      "⛔️ Error : Please enter a valid string !",
    ]);
  });

  test("returns [⛔️ Error : Please enter a valid string !] for entering special characters", () => {
    expect(validateSpeciesName("ab/?*!")).toStrictEqual([
      "⛔️ Error : Please enter a valid string !",
    ]);
  });

  test("returns [⛔️ Error : Species name must be between 3 and 23 characters !] for not entering characters between 3 and 23", () => {
    expect(validateSpeciesName("a")).toStrictEqual([
      "⛔️ Error : Species name must be between 3 and 23 characters !",
    ]);
  });

  test("returns an [⛔️ Error : Field is empty !,⛔️ Error : Species name must be between 3 and 23 characters !] for empty input field of species name", () => {
    expect(validateSpeciesName("")).toStrictEqual([
      "⛔️ Error : Field is empty ! ",
      "⛔️ Error : Species name must be between 3 and 23 characters !",
    ]);
  });

  test("returns an empty array for entering albhabets", () => {
    expect(validateSpeciesName("abc")).toStrictEqual([]);
  });
});

describe("Checking if the data entered in the planet name input field is valid", () => {
  test("returns [⛔️ Error : Please enter a valid string or number !] for entering special characters", () => {
    expect(validatePlanetName("ab/?*!")).toStrictEqual([
      "⛔️ Error : Please enter a valid string or number !",
    ]);
  });

  test("returns [⛔️ Error : Planet name must be between 2 and 49 characters !] for not entering characters between 2 and 49", () => {
    expect(validatePlanetName("a")).toStrictEqual([
      "⛔️ Error : Planet name must be between 2 and 49 characters !",
    ]);
  });

  test("returns an [⛔️ Error : Field is empty !,⛔️ Error : Planet name must be between 2 and 49 characters !] for empty input field of planet name", () => {
    expect(validatePlanetName("")).toStrictEqual([
      "⛔️ Error : Field is empty ! ",
      "⛔️ Error : Planet name must be between 2 and 49 characters !",
    ]);
  });

  test("returns an empty array for entering albhabets and numbers", () => {
    expect(validatePlanetName("abc123")).toStrictEqual([]);
  });
});

describe("Checking if the data entered in the number of beings input field is valid", () => {
  test("returns [⛔️ Error : Please enter a valid number !] for entering special characters", () => {
    expect(validateNumberOfBeings("?*!")).toStrictEqual([
      "⛔️ Error : Please enter a valid number !",
    ]);
  });

  test("returns [⛔️ Error : Please enter a valid number !] for entering alphabets", () => {
    expect(validateNumberOfBeings("afd")).toStrictEqual([
      "⛔️ Error : Please enter a valid number !",
    ]);
  });

  test("returns [⛔️ Error : Number of beings must be at least 1,000,000,000 !] for entering a number less than 1000,000,000", () => {
    expect(validateNumberOfBeings("12345")).toStrictEqual([
      "⛔️ Error : Number of beings must be at least 1,000,000,000 !",
    ]);
  });

  test("returns an [⛔️ Error : Field is empty !,⛔️ Error : Number of beings must be at least 1,000,000,000 !] for empty input field of number of beings", () => {
    expect(validateNumberOfBeings("")).toStrictEqual([
      "⛔️ Error : Field is empty !",
      "⛔️ Error : Number of beings must be at least 1,000,000,000 !",
    ]);
  });

  test("returns an empty array for entering number greater than or equal to 1000,000,000", () => {
    expect(validateNumberOfBeings("1000000001")).toStrictEqual([]);
  });
});

describe("Checking if the data selected in the select field is valid", () => {
  test("returns [⛔️ Error : Not selected ! Please select an answer from the option !] for not selecting any option", () => {
    expect(validateTwoPlusTwo("")).toStrictEqual([
      "⛔️ Error : Not selected ! Please select an answer from the option !",
    ]);
  });

  test("returns [⛔️ Error : You selected the wrong answer !] for selecting the wrong option", () => {
    expect(validateTwoPlusTwo("Not 4")).toStrictEqual([
      "⛔️ Error : You selected the wrong answer !",
    ]);
  });

  test("returns an empty array for selecting the correct option", () => {
    expect(validateTwoPlusTwo("4")).toStrictEqual([]);
  });
});

describe("Checking if the data entered in the text field is valid", () => {
  test("returns [⛔️ Error : Characters name must be between 17 and 153 characters !] for not entering characters between 17 and 153", () => {
    expect(validateReason("adfdf")).toStrictEqual([
      "⛔️ Error : Characters must be between 17 and 153 characters !",
    ]);
  });

  test("returns an [⛔️ Error : Field is empty !,⛔️ Error : Characters must be between 17 and 153 characters !] for empty input field for reason for sparing", () => {
    expect(validateReason("")).toStrictEqual([
      "⛔️ Error : Field is empty !",
      "⛔️ Error : Characters must be between 17 and 153 characters !",
    ]);
  });

  test("returns an empty array for entering albhabets and numbers", () => {
    expect(validateReason("Hi, welcome to planet zzz")).toStrictEqual([]);
  });
});
