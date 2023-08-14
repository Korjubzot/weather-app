/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders SearchForm component correctly", () => {
    const { getByLabelText, getByText } = render(<SearchForm />);

    const labelElement = getByLabelText("Search cities");
    const inputElement = getByLabelText("Search cities", { selector: "input" });
    const buttonElement = getByText("Search");

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("updates search text based on input change", () => {
    const setSearchText = jest.fn();
    const { getByLabelText } = render(
      <SearchForm searchText="" setSearchText={setSearchText} />
    );

    const inputElement = getByLabelText("Search cities", { selector: "input" });
    fireEvent.change(inputElement, { target: { value: "London" } });

    expect(setSearchText).toHaveBeenCalledWith("London");
  });

  it("called onSubmit when Search button is clicked", () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <SearchForm searchText="" setSearchText={() => {}} onSubmit={onSubmit} />
    );

    const buttonElement = getByText("Search");
    fireEvent.click(buttonElement);

    expect(onSubmit).toHaveBeenCalled();
  });
});
