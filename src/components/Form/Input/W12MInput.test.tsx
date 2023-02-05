///////////////////////////////////////////////////////////////////////////////////////////////////

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MInput from "./W12MInput";

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders the input element based on the props entered", () => {
  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value="Chewbacca"
      type="text"
      placeholder="Enter the species"
      onChange={() => {}}
      errorMessage=""
    />
  );
  //inputfield
  const input = screen.getByLabelText("Species Name");

  expect(input).toHaveClass("form__input");
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("calls it's onChange function", async () => {
  const mock = jest.fn();

  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value="Chewbacca"
      type="text"
      placeholder="Enter the species"
      onChange={mock}
      errorMessage=""
    />
  );

  const user = userEvent.setup();

  // input field
  const input = screen.getByRole("textbox", { name: /species-name/i });

  //simulate click and enter the input
  await user.click(input);
  await user.type(input, "Chewbacca");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(9);
});

// ///-----Test 3 -----/////////////////////////////////////////////////////////////

// it("displays the value passed through props", () => {
//   render(
//     <W12MInput
//       id="Species-name"
//       label="Species Name"
//       ariaLabel="species-name"
//       value="Chewbacca"
//       type="text"
//       placeholder="Enter the species"
//       onChange={() => {}}
//       errorMessage=""
//     />
//   );

//   //input field
//   const input = screen.getByRole("textbox", { name: /species-name/i });

//   expect(input).toHaveValue("Chewbacca");
// });

// it("checks if the entered species name is between 2 and 23 characters with no numbers or special characters", async () => {
//   const user = userEvent.setup();
//   const mock = jest.fn();

//   render(
//     <W12MInput
//       id="Species-name"
//       label="Species Name"
//       ariaLabel="species-name"
//       value="/"
//       type="text"
//       placeholder="Enter the species"
//       onChange={mock}
//       errorMessage=""
//     />
//   );

//   const setErrorLog = jest.fn();
//   const handler: jest.SpyInstance = jest.spyOn(React, "useState");
//   handler.mockImplementation((errorLog) => [errorLog, setErrorLog]);

//   const input = screen.getByRole("textbox", { name: /species-name/i });
//   const errorSpecies = screen.getByRole("log");

//   //simulate click and typethe name of species
//   await user.click(input);
//   await user.type(input, "/");

//   // expect(mock).toBeCalled();
//   // expect(mock).toHaveBeenCalledTimes(1);
//   expect(errorSpecies).toHaveTextContent(errMsgSpecies.errCharCount);
// });
