///////////////////////////////////////////////////////////////////////////////////////////////////

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";
import { Data } from "./FormDataInterface";

///////////////////////////////////////////////////////////////////////////////////////////////////

const data: Data = {
  species: "Chewbacca",
  planet: "Narkina",
  numOfBeings: "10000000000",
  select: "4",
  text: "You were good at all the activities!",
};

///-----Test 1 -----/////////////////////////////////////////////////////////////

it("renders form element", () => {
  render(<W12MForm onSubmit={() => {}} />);

  const form = screen.getByRole("form", { name: "W12form-1" });
  expect(form).toHaveClass("form");
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("Renders five fields and a button in the form", () => {
  render(<W12MForm onSubmit={() => {}} />);

  const formFields = screen.getAllByRole("textbox", { name: "inputBox" });

  const button = screen.getByRole("button", { name: /Submit form/i });

  expect(formFields).toHaveLength(5);
  expect(button).toBeInTheDocument();
});

///-----Test 3 -----/////////////////////////////////////////////////////////////

it("submit button call its handler function and passes the correct parameters", async () => {
  const user = userEvent.setup();
  const mock = jest.fn();

  render(<W12MForm onSubmit={mock} />);

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

  //render the form data in the browser
  const displayDataBox = screen.getByRole("list");

  const formData = within(displayDataBox).getAllByRole("listitem");

  // checks if submit button call its handler function
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(data);

  //checks if submit button passes the correct parameters
  expect(formData[0]).toHaveTextContent(data["species"]);
  expect(formData[1]).toHaveTextContent(data["planet"]);
  expect(formData[2]).toHaveTextContent(data["numOfBeings"]);
  expect(formData[3]).toHaveTextContent(data["select"]);
  expect(formData[4]).toHaveTextContent(data["text"]);
});

///-----Test 4 -----/////////////////////////////////////////////////////////////

it("empties the input fields and select fields after form submit", async () => {
  const user = userEvent.setup();

  render(<W12MForm onSubmit={() => {}} />);

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
  await user.type(inputFieldNumOfBeings, data.numOfBeings.toString());

  //simulate click and select the option
  await user.click(selectField);
  await user.selectOptions(selectField, data.select);

  //simulate click and enter the reason
  await user.click(textField);
  await user.type(textField, data.text);

  //simulate button click
  await user.click(button);

  expect(inputFieldSpecies).toHaveValue("");
  expect(inputFieldPlanet).toHaveValue("");
  expect(inputFieldNumOfBeings).toHaveValue("");
  expect(selectField).toHaveValue("");
  expect(textField).toHaveValue("");
});
