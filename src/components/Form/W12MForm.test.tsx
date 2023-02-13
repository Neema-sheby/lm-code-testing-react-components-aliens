import { render, screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MForm from "./W12MForm";
import { W12FormData } from "./W12MFormDataInterface";
import {
  errMsgSpecies,
  errMsgPlanet,
  errMsgNumOfBeings,
  errMsgTwoPlusTwo,
  errMsgReason,
} from "../ErrorHandling/ErrorMessage";
import React from "react";

const testData1: W12FormData = {
  species: "Chewbacca",
  planet: "Narkina",
  numOfBeings: "10000000000",
  twoPlusTwo: "4",
  reasonForSparing: "You were good at all the activities!",
};

const testData2: W12FormData = {
  species: "A",
  planet: "/",
  numOfBeings: "10000",
  twoPlusTwo: "Not 4",
  reasonForSparing: "You ",
};

//------------( Tests using testData1)

///-----Test 1-----

it("renders form element", () => {
  render(<W12MForm />);

  const form = screen.getByRole("form", { name: "W12form-1" });
  expect(form).toHaveClass("form");
});

///-----Test 2 -----

it("Renders five fields and a button in the form", () => {
  render(<W12MForm />);

  // All the input fields
  const formFields = screen.getAllByRole("textbox", { name: "inputBox" });

  //button
  const button = screen.getByRole("button", { name: /Submit form/i });

  expect(formFields).toHaveLength(5);
  expect(button).toBeInTheDocument();
});

///-----Test 3 -----

it("displays the submitted data", async () => {
  const user = userEvent.setup();

  render(<W12MForm />);

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

  //simulate and enter the name of species
  await user.type(inputFieldSpecies, testData1.species);

  //simulate enter the name of planet
  await user.type(inputFieldPlanet, testData1.planet);

  //simulate enter the nunber of beings
  await user.type(inputFieldNumOfBeings, testData1.numOfBeings);

  //simulate select the option
  await user.selectOptions(selectField, testData1.twoPlusTwo);

  //simulate enter the reason
  await user.type(textField, testData1.reasonForSparing);

  //simulate button click
  await user.click(button);

  //render the form data in the browser
  const displayDataBox = screen.getByRole("list");

  const formData = within(displayDataBox).getAllByRole("listitem");

  //checks if submit button passes the correct parameters
  expect(formData[0]).toHaveTextContent(testData1["species"]);
  expect(formData[1]).toHaveTextContent(testData1["planet"]);
  expect(formData[2]).toHaveTextContent(testData1["numOfBeings"]);
  expect(formData[3]).toHaveTextContent(testData1["twoPlusTwo"]);
  expect(formData[4]).toHaveTextContent(testData1["reasonForSparing"]);
});

///-----Test 4 -----

it("empties the input fields and select fields after form submit", async () => {
  const user = userEvent.setup();

  render(<W12MForm />);

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

  //simulate type the name of species
  await user.type(inputFieldSpecies, testData1.species);

  //simulate type the name of planet
  await user.type(inputFieldPlanet, testData1.planet);

  //simulate type the nunber of beings
  await user.type(inputFieldNumOfBeings, testData1.numOfBeings);

  //simulate type the option
  await user.selectOptions(selectField, testData1.twoPlusTwo);

  //simulate type the reason
  await user.type(textField, testData1.reasonForSparing);

  //simulate button click
  await user.click(button);

  expect(inputFieldSpecies).toHaveValue("");
  expect(inputFieldPlanet).toHaveValue("");
  expect(inputFieldNumOfBeings).toHaveValue("");
  expect(selectField).toHaveValue("");
  expect(textField).toHaveValue("");
});

//------------( Test using testData2)

///-----Test 5 -----

it("checks if the form is displaying the correct error meesage", async () => {
  const user = userEvent.setup();

  render(<W12MForm />);

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

  //simulate type the name of species
  await user.type(inputFieldSpecies, testData2.species);

  //simulate type the name of planet
  await user.type(inputFieldPlanet, testData2.planet);

  //simulate type the nunber of beings
  await user.type(inputFieldNumOfBeings, testData2.numOfBeings);

  //simulate select the option
  await user.selectOptions(selectField, testData2.twoPlusTwo);
  fireEvent.mouseDown(selectField, {
    target: { value: testData2.twoPlusTwo },
  });

  //simulate type the reason
  await user.type(textField, testData2.reasonForSparing);

  //simulate button click
  await user.click(button);

  // expects error for entering species name with less than 3 characters
  expect(errorSpecies).toHaveTextContent(errMsgSpecies.errCharCount);
  expect(errorPlanet).toHaveTextContent(errMsgPlanet.errValidString);
  expect(errorNumOfBeings).toHaveTextContent(errMsgNumOfBeings.errNum);
  expect(errorSelect).toHaveTextContent(errMsgTwoPlusTwo.errInvalidAnswer);
  expect(errorTextArea).toHaveTextContent(errMsgReason.errCharCount);
});
