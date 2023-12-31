import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./components/App";

xtest("renders Weather App", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
