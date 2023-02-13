import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MInput from "./W12MInput";

import { errMsgSpecies } from "../../ErrorHandling/ErrorMessage";

///-----Test 1 -----

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
      onValidate={[]}
    />
  );
  //inputfield
  const input = screen.getByLabelText("Species Name");

  expect(input).toHaveClass("form__input");
});

///-----Test 2 -----

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
      onValidate={[]}
    />
  );

  const user = userEvent.setup();

  // input field
  const input = screen.getByRole("textbox", { name: /species-name/i });

  //simulate enter the input
  await user.type(input, "Chewbacca");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(9);
});

///-----Test 3 -----

it("displays the value passed through props", () => {
  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value="Chewbacca"
      type="text"
      placeholder="Enter the species"
      onChange={() => {}}
      onValidate={[]}
    />
  );

  const input = screen.getByRole("textbox", { name: /species-name/i });

  expect(input).toHaveValue("Chewbacca");
});

///-----Test 4 -----

it("checks if the entered species name is between 2 and 23 characters with no numbers or special characters", () => {
  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value="a"
      type="text"
      placeholder="Enter the species"
      onChange={() => {}}
      onValidate={[errMsgSpecies.errCharCount]}
    />
  );

  const errorSpecies = screen.getByRole("log");

  expect(errorSpecies).toHaveTextContent(errMsgSpecies.errCharCount);
});

///-----Test 5 -----

it("checks if the entered species name is a valid string", () => {
  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value=""
      type="text"
      placeholder="Enter the species"
      onChange={() => {}}
      onValidate={[errMsgSpecies.errValidString]}
    />
  );

  const errorSpecies = screen.getByRole("log");
  const errMsgElement = within(errorSpecies).getByText(
    errMsgSpecies.errValidString
  );

  expect(errMsgElement).toHaveTextContent(errMsgSpecies.errValidString);
});
