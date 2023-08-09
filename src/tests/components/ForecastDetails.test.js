/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    date: "Thu Jan 01 1970",
    temperature: {
      min: 11,
      max: 24,
    },
    humidity: 20,
    wind: {
      speed: 10,
      direction: "n",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        temperature={validProps.temperature}
        humidity={validProps.humidity}
        wind={validProps.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
