///////////////////////////////////////////////////////////////////////////////////////////////////

import { render, screen } from "@testing-library/react";
import App from "./App";

///////////////////////////////////////////////////////////////////////////////////////////////////

it("Displays a header and a form", () => {
  render(<App />);

  const header = screen.getByRole("banner");
  const form = screen.getByRole("form", { name: "W12form-1" });
  expect(header).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});
