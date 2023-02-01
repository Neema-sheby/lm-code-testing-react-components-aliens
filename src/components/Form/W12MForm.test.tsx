import { render, screen, within } from "@testing-library/react";
import W12MForm from "./W12MForm";

test("Displays all the input fields and and button", () => {
  const inputFieldLabels = [
    "Species Name",
    "Planet Name",
    "Number of Beings",
    "What is 2 + 2",
    "Reason for sparing",
  ];

  render(<W12MForm />);

  const inputBoxes = screen.getAllByRole("listitem");
  const button = screen.getByRole("button", { name: /Submit form/i });
  inputBoxes.forEach((inputBox, i) => {
    expect(
      within(inputBox).getByRole("textbox", {
        name: new RegExp(inputFieldLabels[i]),
      })
    ).toBeInTheDocument();
  });

  expect(button).toBeInTheDocument();
});
