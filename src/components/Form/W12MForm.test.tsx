///////////////////////////////////////////////////////////////////////////////////////////////////

import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";
import { Data } from "./W12MFormDataInterface";
import {
  errMsgSpecies,
  errMsgPlanet,
  errMsgNumOfBeings,
  errMsgSelect,
  errMsgTextArea,
} from "../ErrorHandling/ErrorMessage";
import React from "react";

//afterEach(cleanup);

///////////////////////////////////////////////////////////////////////////////////////////////////

const testData1: Data = {
  species: "Chewbacca",
  planet: "Narkina",
  numOfBeings: "10000000000",
  select: "4",
  text: "You were good at all the activities!",
};

const testData2: Data = {
  species: "A",
  planet: "p",
  numOfBeings: "10000",
  select: "",
  text: "You ",
};

/////////////------------( Tests using testData1)

///-----Test 1-----/////////////////////////////////////////////////////////////

it("renders form element", () => {
  render(<W12MForm onSubmit={() => {}} />);

  const form = screen.getByRole("form", { name: "W12form-1" });
  expect(form).toHaveClass("form");
});

///-----Test 2 -----/////////////////////////////////////////////////////////////

it("Renders five fields and a button in the form", () => {
  render(<W12MForm onSubmit={() => {}} />);

  // All the input fields
  const formFields = screen.getAllByRole("textbox", { name: "inputBox" });

  //button
  const button = screen.getByRole("button", { name: /Submit form/i });

  expect(formFields).toHaveLength(5);
  expect(button).toBeInTheDocument();
});

///-----Test 3 -----/////////////////////////////////////////////////////////////

it("submit button call its handler function and passes the correct parameters", async () => {
  const user = userEvent.setup();
  const mock = jest.fn();

  render(<W12MForm onSubmit={mock} />);

  // Species input field
  const inputFieldSpecies = screen.getByRole("textbox", {
    name: /species-name/i,
  });

  // Planet input field
  const inputFieldPlanet = screen.getByRole("textbox", {
    name: /planet-name/i,
  });

  // Number of beings input field
  const inputFieldNumOfBeings = screen.getByRole("textbox", {
    name: /num-of-beings/i,
  });

  //Select field
  const selectField = screen.getByRole("combobox", {
    name: /select-what/i,
  });

  //Text field
  const textField = screen.getByRole("textbox", {
    name: /textArea-reason/i,
  });

  //button
  const button = screen.getByRole("button", { name: /Submit form/i });

  //simulate click and enter the name of species
  await user.click(inputFieldSpecies);
  await user.type(inputFieldSpecies, testData1.species);

  //simulate click and enter the name of planet
  await user.click(inputFieldPlanet);
  await user.type(inputFieldPlanet, testData1.planet);

  //simulate click and enter the nunber of beings
  await user.click(inputFieldNumOfBeings);
  await user.type(inputFieldNumOfBeings, testData1.numOfBeings);

  //simulate click and select the option
  await user.click(selectField);
  await user.selectOptions(selectField, testData1.select);

  //simulate click and enter the reason
  await user.click(textField);
  await user.type(textField, testData1.text);

  //simulate button click
  await user.click(button);

  //render the form data in the browser
  const displayDataBox = screen.getByRole("list");

  const formData = within(displayDataBox).getAllByRole("listitem");

  // checks if submit button call its handler function
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(testData1);

  //checks if submit button passes the correct parameters
  expect(formData[0]).toHaveTextContent(testData1["species"]);
  expect(formData[1]).toHaveTextContent(testData1["planet"]);
  expect(formData[2]).toHaveTextContent(testData1["numOfBeings"]);
  expect(formData[3]).toHaveTextContent(testData1["select"]);
  expect(formData[4]).toHaveTextContent(testData1["text"]);
});

///-----Test 4 -----/////////////////////////////////////////////////////////////

it("empties the input fields and select fields after form submit", async () => {
  const user = userEvent.setup();

  render(<W12MForm onSubmit={() => {}} />);

  // Species input field
  const inputFieldSpecies = screen.getByRole("textbox", {
    name: /species-name/i,
  });

  // Planet input field
  const inputFieldPlanet = screen.getByRole("textbox", {
    name: /planet-name/i,
  });

  // Number of beings input field
  const inputFieldNumOfBeings = screen.getByRole("textbox", {
    name: /num-of-beings/i,
  });

  //Select field
  const selectField = screen.getByRole("combobox", {
    name: /select-what/i,
  });

  //Text field
  const textField = screen.getByRole("textbox", {
    name: /textArea-reason/i,
  });

  //button
  const button = screen.getByRole("button", { name: /Submit form/i });

  //simulate click and type the name of species
  await user.click(inputFieldSpecies);
  await user.type(inputFieldSpecies, testData1.species);

  //simulate click and type the name of planet
  await user.click(inputFieldPlanet);
  await user.type(inputFieldPlanet, testData1.planet);

  //simulate click and type the nunber of beings
  await user.click(inputFieldNumOfBeings);
  await user.type(inputFieldNumOfBeings, testData1.numOfBeings);

  //simulate click and type the option
  await user.click(selectField);
  await user.selectOptions(selectField, testData1.select);

  //simulate click and type the reason
  await user.click(textField);
  await user.type(textField, testData1.text);

  //simulate button click
  await user.click(button);

  expect(inputFieldSpecies).toHaveValue("");
  expect(inputFieldPlanet).toHaveValue("");
  expect(inputFieldNumOfBeings).toHaveValue("");
  expect(selectField).toHaveValue("");
  expect(textField).toHaveValue("");
});

/////////////------------( Test using testData2)

///-----Test 5 -----/////////////////////////////////////////////////////////////

it("checks if the form is displaying the correct error meesage", async () => {
  const user = userEvent.setup();

  const mock = jest.fn();

  render(<W12MForm onSubmit={mock} />);

  // All the input fields
  const formFields = screen.getAllByRole("textbox", { name: "inputBox" });

  // Species input field
  const inputFieldSpecies = screen.getByRole("textbox", {
    name: /species-name/i,
  });

  // Planet input field
  const inputFieldPlanet = screen.getByRole("textbox", {
    name: /planet-name/i,
  });

  // Number of beings input field
  const inputFieldNumOfBeings = screen.getByRole("textbox", {
    name: /num-of-beings/i,
  });

  //Select field
  const selectField = screen.getByRole("combobox", {
    name: /select-what/i,
  });

  //Text field
  const textField = screen.getByRole("textbox", {
    name: /textArea-reason/i,
  });

  // html elements rendering the error message
  const errorSpecies = within(formFields[0]).getByRole("log");
  const errorPlanet = within(formFields[1]).getByRole("log");
  const errorNumOfBeings = within(formFields[2]).getByRole("log");
  const errorSelect = within(formFields[3]).getByRole("log");
  const errorTextArea = within(formFields[4]).getByRole("log");

  //button
  const button = screen.getByRole("button", { name: /Submit form/i });

  //Simulating the user button clicks, entering input, selecting elements

  //simulate click and type the name of species
  await user.click(inputFieldSpecies);
  await user.type(inputFieldSpecies, testData2.species);

  //simulate click and type the name of planet
  await user.click(inputFieldPlanet);
  await user.type(inputFieldPlanet, testData2.planet);

  //simulate click and type the nunber of beings
  await user.click(inputFieldNumOfBeings);
  await user.type(inputFieldNumOfBeings, testData2.numOfBeings);

  //simulate click and select the option
  await user.click(selectField);
  await user.selectOptions(selectField, testData2.select);
  fireEvent.mouseDown(selectField, {
    target: { value: testData2.select },
  });

  //simulate click and type the reason
  await user.click(textField);
  await user.type(textField, testData2.text);

  //simulate button click
  await user.click(button);

  // expects error for entering species name with less than 3 characters
  expect(errorSpecies).toHaveTextContent(errMsgSpecies.errCharCount);

  //simulate button click
  await user.click(button);

  //clicking input field and  reentering text with more than 3 and less than 23 characters
  await user.click(inputFieldSpecies);
  await user.type(inputFieldSpecies, testData1.species);

  //click the button again
  await user.click(button);

  // expects the species error message to be clear
  expect(errorSpecies).toHaveTextContent("");

  // expects error message for entering planet name with less than 2 characters
  expect(errorPlanet).toHaveTextContent(errMsgPlanet.errCharCount);

  ////clicking input field and  reentering text with more than 2 and less than 49 characters
  await user.click(inputFieldPlanet);
  await user.type(inputFieldPlanet, testData1.planet);

  //simulate button click
  await user.click(button);

  // expects the species and planet error message to be clear
  expect(errorSpecies).toHaveTextContent("");
  expect(errorPlanet).toHaveTextContent("");

  // expects error message for entering a number less than 1000000000
  expect(errorNumOfBeings).toHaveTextContent(errMsgNumOfBeings.errNum);

  //clicking input field and entering a number greater than 1000000000
  await user.click(inputFieldNumOfBeings);
  await user.type(inputFieldNumOfBeings, testData1.numOfBeings);

  //simulate button click
  await user.click(button);

  // expects the species, planet and number of beings error message to be clear
  expect(errorSpecies).toHaveTextContent("");
  expect(errorPlanet).toHaveTextContent("");
  expect(errorNumOfBeings).toHaveTextContent("");

  // expects error message for not selecting any options
  expect(errorSelect).toHaveTextContent(errMsgSelect.errNotSelected);

  //clicking select field and  selecting an option
  await user.click(selectField);
  await user.selectOptions(selectField, testData1.select);
  fireEvent.mouseDown(selectField, {
    target: { value: testData1.select },
  });

  //simulate button click
  await user.click(button);

  // expects the species, planet, number of beings and select error message to be clear
  expect(errorSpecies).toHaveTextContent("");
  expect(errorPlanet).toHaveTextContent("");
  expect(errorNumOfBeings).toHaveTextContent("");
  expect(errorSelect).toHaveTextContent("");

  // expects error message for entering text less than 17 characters
  expect(errorTextArea).toHaveTextContent(errMsgTextArea.errCharCount);

  //clicking textarea and  entering text withbmore than 17 and less than 153 characters
  await user.click(textField);
  await user.type(textField, testData1.text);

  //simulate button click
  await user.click(button);

  //expects all the error messages to be clear
  expect(errorSpecies).toHaveTextContent("");
  expect(errorPlanet).toHaveTextContent("");
  expect(errorNumOfBeings).toHaveTextContent("");
  expect(errorSelect).toHaveTextContent("");
  expect(errorTextArea).toHaveTextContent("");
});
