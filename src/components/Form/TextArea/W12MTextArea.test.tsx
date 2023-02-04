import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MTextBox from "./W12MTextArea";

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders the textarea field", () => {
  render(
    <W12MTextBox
      ariaLabel="textArea-reason"
      id="textArea-reason"
      label="Reason for sparing"
      value=""
      placeholder="Enter the reason for sparing"
      rows={6}
      cols={100}
      onChange={() => {}}
      errorMessage=""
    />
  );

  const textArea = screen.getByRole("textbox", { name: "textArea-reason" });

  expect(textArea).toBeInTheDocument();
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("calls it's onChange function", async () => {
  const mock = jest.fn();

  render(
    <W12MTextBox
      ariaLabel="textArea-reason"
      id="textArea-reason"
      label="Reason for sparing"
      value=""
      placeholder="Enter the reason for sparing"
      rows={6}
      cols={100}
      onChange={mock}
      errorMessage=""
    />
  );

  const user = userEvent.setup();
  const textArea = screen.getByRole("textbox", { name: /textArea-reason/i });

  await user.click(textArea);
  await user.type(textArea, "I'm a good person");

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(17);
});

///-----Test 3 -----/////////////////////////////////////////////////////////////

it("displays the value passed through props", () => {
  render(
    <W12MTextBox
      ariaLabel="textArea-reason"
      id="textArea-reason"
      label="Reason for sparing"
      value="I'm a good person"
      placeholder="Enter the reason for sparing"
      rows={6}
      cols={100}
      onChange={() => {}}
      errorMessage=""
    />
  );

  const textArea = screen.getByRole("textbox", { name: /textArea-reason/i });

  expect(textArea).toHaveValue("I'm a good person");
});
