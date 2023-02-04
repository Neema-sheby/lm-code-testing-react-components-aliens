///////////////////////////////////////////////////////////////////////////////////////////////////

import { screen, render } from "@testing-library/react";
import W12MOption from "./W12MOption";

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders the option field", () => {
  render(<W12MOption value="Not 4">Not 4</W12MOption>);

  const optionField = screen.getByRole("option");

  expect(optionField).toBeInTheDocument();
});

it("The props are working well", () => {
  render(<W12MOption value="Not 4">Not 4</W12MOption>);

  const optionField = screen.getByRole("option");

  expect(optionField).toHaveValue("Not 4");
});
