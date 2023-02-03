import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders main heading (h1 element)", () => {
  render(<W12MHeader />);

  const heading = screen.getByRole("heading");

  expect(heading).toHaveTextContent(
    /W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION/i
  );
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("renders header text", () => {
  render(<W12MHeader />);
  const headerText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  expect(headerText).toBeInTheDocument();
});
