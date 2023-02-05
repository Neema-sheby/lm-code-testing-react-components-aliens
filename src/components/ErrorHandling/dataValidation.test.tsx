///////////////////////////////////////////////////////////////////////////////////////////////////

import {
  isString,
  isStringAndNumberOnly,
  isNumber,
  checkNumCharacters,
} from "./dataValidation";

///////////////////////////////////////////////////////////////////////////////////////////////////

describe("Checking if the data entered in the input field is a string but not a number or special character", () => {
  test("returns false for entering a number", () => {
    expect(isString("5")).toBe(false);
  });

  test("returns false for entering special characters", () => {
    expect(isString("ab/?*!")).toBe(false);
  });

  test("returns true for entering albhabets", () => {
    expect(isString("abc")).toBe(true);
  });
});

//------------------------------------------------------------

describe("Checking if a string and a number can be entered in the input field but no characters", () => {
  test("returns false for entering special characters", () => {
    expect(isStringAndNumberOnly("5a?*!")).toBe(false);
  });

  test("returns true for entering numbers", () => {
    expect(isStringAndNumberOnly("1234")).toBe(true);
  });

  test("returns true for entering albhabets", () => {
    expect(isStringAndNumberOnly("abc")).toBe(true);
  });

  test("returns true for entering albhabets and numbers", () => {
    expect(isStringAndNumberOnly("abc123")).toBe(true);
  });
});

//------------------------------------------------------------

describe("Checking if the data entered is a number", () => {
  test("returns false for entering alphabets", () => {
    expect(isNumber("abc")).toBe(false);
  });

  test("returns false for entering number and alphabet", () => {
    expect(isNumber("abc123")).toBe(false);
  });

  test("returns false for entering special characters", () => {
    expect(isNumber("/?@")).toBe(false);
  });

  test("returns false for entering number and special characters", () => {
    expect(isNumber("/5")).toBe(false);
  });

  test("returns true for entering numbers", () => {
    expect(isNumber("123")).toBe(true);
  });
});

//------------------------------------------------------------

describe("Checking if the number of characters in the text is between 3 and 23", () => {
  test("returns false for entering less than 3 characters", () => {
    expect(checkNumCharacters(3, 23, "I")).toBe(false);
  });

  test("returns false for entering more than 23 characters", () => {
    expect(
      checkNumCharacters(
        3,
        23,
        "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio"
      )
    ).toBe(false);
  });

  test("returns true for entering more than 3 and less than 23 characters", () => {
    expect(checkNumCharacters(3, 23, "Chewbacca")).toBe(true);
  });
});

//------------------------------------------------------------

describe("Checking if the number of characters in the text is between 2 and 49", () => {
  test("returns false for entering less than 2 characters", () => {
    expect(checkNumCharacters(2, 49, "m")).toBe(false);
  });

  test("returns false for entering more than 49 characters", () => {
    expect(
      checkNumCharacters(
        2,
        49,
        "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioggtrgtrgtgttrg"
      )
    ).toBe(false);
  });

  test("returns true for entering more than 2 and less than 49 characters", () => {
    expect(checkNumCharacters(2, 49, "Kepler22b")).toBe(true);
  });
});

//------------------------------------------------------------

describe("Checking if the number of characters in the text is between 17 and 153", () => {
  test("returns false for entering less than 7 characters", () => {
    expect(checkNumCharacters(7, 153, "lorum")).toBe(false);
  });

  test("returns false for entering more than 153 characters", () => {
    expect(
      checkNumCharacters(
        7,
        153,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      )
    ).toBe(false);
  });

  test("returns true for entering more than 7 and less than 153 characters", () => {
    expect(
      checkNumCharacters(
        7,
        153,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
    ).toBe(true);
  });
});
