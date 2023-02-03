import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MSelect from "./W12MSelect";
import W12MOption from "../Options/W12MOption";
import { OPTIONS } from "../Options/OptionsData";

const options = OPTIONS.map((option, i) => {
  return (
    <W12MOption key={i + option.value} value={option.value}>
      {option.label}
    </W12MOption>
  );
});

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders the select field", () => {
  render(
    <W12MSelect
      ariaLabel="select-what"
      value=""
      id="select-what"
      label="What is 2 + 2 ?"
      onChange={() => {}}
    >
      {options}
    </W12MSelect>
  );

  const select = screen.getByRole("combobox", { name: "select-what" });

  expect(select).toBeInTheDocument();
});

///-----Test 2 -----/; ////////////////////////////////////////////////////////////

it("calls it's onChange function and also displays the selected option correctly", async () => {
  const mock = jest.fn();

  render(
    <W12MSelect
      ariaLabel="select-what"
      value=""
      id="select-what"
      label="What is 2 + 2 ?"
      onChange={mock}
    >
      {options}
    </W12MSelect>
  );

  const user = userEvent.setup();
  const selectField = screen.getByRole("combobox", { name: /select-what/i });
  const optionField = screen.getAllByRole("option");

  //simulate click, select the input and click (mouse down) the selection
  await user.click(selectField);
  await user.selectOptions(selectField, "Not 4");
  fireEvent.mouseDown(selectField, {
    target: { value: optionField[2].textContent },
  });

  expect(mock).toBeCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(selectField).toHaveValue(optionField[2].textContent);
});