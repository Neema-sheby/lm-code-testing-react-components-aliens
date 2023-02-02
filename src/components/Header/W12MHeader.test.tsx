import { render, screen } from "@testing-library/react";
import W12MHeader from "./W12MHeader";

it("renders header text", () => {
  render(<W12MHeader />);
  const headerText = screen.getByText(
    /Each species may only submit ONE W-12-M form./i
  );
  expect(headerText).toBeInTheDocument();
});
