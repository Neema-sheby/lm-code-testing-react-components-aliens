import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders the main heading", () => {
  render(<W12MHeader />);

  // const heading = screen.getByRole();
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("renders header text", () => {
  render(<W12MHeader />);
  const headerText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  expect(headerText).toBeInTheDocument();
});
