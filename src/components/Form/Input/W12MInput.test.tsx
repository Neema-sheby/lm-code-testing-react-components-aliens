import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MInput from "./W12MInput";
import { MIN_CHAR_SPECIES, MAX_CHAR_SPECIES } from "../../Configuration";

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
      minLength={MIN_CHAR_SPECIES}
      maxLength={MAX_CHAR_SPECIES}
      onChange={() => {}}
    />
  );

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
      minLength={MIN_CHAR_SPECIES}
      maxLength={MAX_CHAR_SPECIES}
      onChange={mock}
    />
  );

  const user = userEvent.setup();
  const input = screen.getByRole("textbox", { name: /species-name/i });

  //simulate click and enter the input
  await user.click(input);
  await user.type(input, "Chewbacca");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(9);
});

///-----Test 3 -----/////////////////////////////////////////////////////////////

it("displays the value passed through props", () => {
  render(
    <W12MInput
      id="Species-name"
      label="Species Name"
      ariaLabel="species-name"
      value="Chewbacca"
      type="text"
      placeholder="Enter the species"
      minLength={MIN_CHAR_SPECIES}
      maxLength={MAX_CHAR_SPECIES}
      onChange={() => {}}
    />
  );

  const input = screen.getByRole("textbox", { name: /species-name/i });

  expect(input).toHaveValue("Chewbacca");
});
