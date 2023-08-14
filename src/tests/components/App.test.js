/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

test("renders App component", () => {
  const { getByTestId } = render(<App />);

  const locationElement = getByTestId("location");
  expect(locationElement).toBeInTheDocument();
});
