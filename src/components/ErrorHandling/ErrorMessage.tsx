export type Error = Array<string>;

export interface ErrorLog {
  species: Error;
  planet: Error;
  NumOfBeings: Error;
  twoPlusTwo: Error;
  reasonForSparing: Error;
}

export const initialErrorLog: ErrorLog = {
  species: [],
  planet: [],
  NumOfBeings: [],
  twoPlusTwo: [],
  reasonForSparing: [],
};

// Error messages for species input field
export const errMsgSpecies = {
  errEmpty: "⛔️ Error : Field is empty ! ",
  errCharCount:
    "⛔️ Error : Species name must be between 3 and 23 characters !",
  errValidString: "⛔️ Error : Please enter a valid string !",
};

// Error messages for planet input field
export const errMsgPlanet = {
  errEmpty: "⛔️ Error : Field is empty ! ",
  errCharCount: "⛔️ Error : Planet name must be between 2 and 49 characters !",
  errValidString: "⛔️ Error : Please enter a valid string or number !",
};

// Error messages for number of beings input field
export const errMsgNumOfBeings = {
  errEmpty: "⛔️ Error : Field is empty !",
  errNum: "⛔️ Error : Number of beings must be at least 1,000,000,000 !",
  errValidNumber: "⛔️ Error : Please enter a valid number !",
};

// Error messages for select input field
export const errMsgTwoPlusTwo = {
  errNotSelected:
    "⛔️ Error : Not selected ! Please select an answer from the option !",
  errInvalidAnswer: "⛔️ Error : You selected the wrong answer !",
};

// Error messages for textarea input field
export const errMsgReason = {
  errEmpty: "⛔️ Error : Field is empty !",
  errCharCount:
    "⛔️ Error : Characters must be between 17 and 153 characters !",
};

//-------------------------------------------------------------------------

interface ErrorMessageProp {
  onValidate: Array<string>;
}

export const ErrorMessage: React.FC<ErrorMessageProp> = ({ onValidate }) => {
  return (
    <div role="log" className="form__error">
      {onValidate.map((err, i) => (
        <div key={i + "err"}>{err}</div>
      ))}
    </div>
  );
};
