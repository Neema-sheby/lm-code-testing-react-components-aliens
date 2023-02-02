import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//import user from "@testing-library/user-event";
//import { fireEvent } from "@testing-library/react";
import W12MForm from "./W12MForm";

const data = {
  species: "Chewbacca",
  planet: "Narkina",
  numOfBeings: "3",
  select: "Not 4",
  text: " You were good!",
};

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("Renders five fields and a button in the form", () => {
  render(<W12MForm setData={() => {}} />);

  const formFields = screen.getAllByRole("tree");

  const button = screen.getByRole("button", { name: /Submit form/i });

  expect(formFields).toHaveLength(5);
  expect(button).toBeInTheDocument();
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("calls a function setData() on submit", async () => {
  const user = userEvent.setup();
  const mock = jest.fn();

  render(<W12MForm setData={mock} />);

  const inputFieldSpecies = screen.getByRole("textbox", {
    name: /species-name/i,
  });
  const inputFieldPlanet = screen.getByRole("textbox", {
    name: /planet-name/i,
  });
  const inputFieldNumOfBeings = screen.getByRole("textbox", {
    name: /num-of-beings/i,
  });

  const selectField = screen.getByRole("combobox", {
    name: /select-what/i,
  });

  const textField = screen.getByRole("textbox", {
    name: /textArea-reason/i,
  });

  const button = screen.getByRole("button", { name: /Submit form/i });

  //simulate click and enter the name of species
  await user.click(inputFieldSpecies);
  await user.type(inputFieldSpecies, data.species);

  //simulate click and enter the name of planet
  await user.click(inputFieldPlanet);
  await user.type(inputFieldPlanet, data.planet);

  //simulate click and enter the nunber of beings
  await user.click(inputFieldNumOfBeings);
  await user.type(inputFieldNumOfBeings, data.numOfBeings);

  //simulate click and select the option
  await user.click(selectField);
  await user.selectOptions(selectField, data.select);

  //simulate click and enter the reason
  await user.click(textField);
  await user.type(textField, data.text);

  //simulate button click
  await user.click(button);

  // check if form make a function call setData() onsubmit
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    species: "Chewbacca",
    planet: "Narkina",
    numOfBeings: "3",
    select: "Not 4",
    text: " You were good!",
  });
});
