/* eslint-disable react/jsx-filename-extension */
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../components/App";

describe("App", () => {
  xtest("renders correctly", () => {
    render(<App />);
    const locationElement = screen.getByTestId("location");
    expect(locationElement).toBeInTheDocument();
  });
});
