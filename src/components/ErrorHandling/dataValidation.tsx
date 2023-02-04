///////////////////////////////////////////////////////////////////////////////////////////////////

// check if string
export const isString = (data: string): boolean =>
  typeof data === "string" && !data.match(/[^$A-Za-z]/g) ? true : false;

// check if string or number
export const isStringAndNumberOnly = (data: string): boolean =>
  !data.match(/[^$A-Za-z0-9]/g) ? true : false;

// check if number
export const isNumber = (data: string): boolean => {
  return data.match(/[^0-9]/g) ? false : true;
};

// check character count
export const checkNumCharacters = (
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
