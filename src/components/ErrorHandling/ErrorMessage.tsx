///----- Error variables-----/////////////////////////////////////////////////////////////

export interface ErrorLog {
  errorSpecies: string;
  errorPlanet: string;
  errorNumOfBeings: string;
  errorSelect: string;
  errorTextArea: string;
}

export const initialErrorLog: ErrorLog = {
  errorSpecies: "",
  errorPlanet: "",
  errorNumOfBeings: "",
  errorSelect: "",
  errorTextArea: "",
};

///----- Error messages-----/////////////////////////////////////////////////////////////

// Error messages for species input field
export const errMsgSpecies = {
  errEmpty: "⛔️ Error : Field is empty ! Please enter a valid species name !",
  errCharCount:
    "⛔️ Error : Species name must be between 3 and 23 characters !",
  errValidString: "⛔️ Error : Please enter a valid string for species name !",
};

// Error messages for planet input field
/////////////////////////////////////////////////////////////////////////////////

export const errMsgPlanet = {
  errEmpty: "⛔️ Error : Field is empty ! Please enter a valid planet name !",
  errCharCount: "⛔️ Error : Planet name must be between 2 and 49 characters !",
  errValidString: "⛔️ Error : Please enter a valid string for planet name !",
};

// Error messages for number of beings input field
export const errMsgNumOfBeings = {
  errEmpty:
    "⛔️ Error : Field is empty ! Please enter a valid Number of beings !",
  errNum: "⛔️ Error : Number of beings must be at least 1,000,000,000 !",
  errValidNumber: "⛔️ Error : Please enter a valid number of beings !",
};

// Error messages for select input field
export const errMsgSelect = {
  errNotSelected:
    "⛔️ Error : Not selected ! Please select an answer from the option !",
  errInvalidAnswer: "⛔️ Error : You selected the wrong answer !",
};

// Error messages for textarea input field
export const errMsgTextArea = {
  errEmpty: "Error: Field is empty ! Please enter a valid reason for sparing !",
  errCharCount:
    "⛔️ Error : Reason for sparing must be between 17 and 153 characters !",
};

///////////////////////////////////////////////////////////////////////////////////////////////////

interface ErrorMessageProp {
  errorMessage: string;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export const ErrorMessage: React.FC<ErrorMessageProp> = ({ errorMessage }) => {
  return (
    <div role="log" className="form__error">
      {errorMessage}
    </div>
  );
};
