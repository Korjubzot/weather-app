import React from "react";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const { min, max } = temperature;
  const { speed: windspeed, direction } = wind;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div
        className="forecast-details__date"
        data-testid="forecast-details__date"
      >
        {formattedDate}
      </div>
      <div
        className="forecast-details__minTemp"
        data-testid="forecast-details__minTemp"
      >
        Minimum: {min}&deg;C
      </div>
      <div
        className="forecast-details__maxTemp"
        data-testid="forecast-details__maxTemp"
      >
        Maximum: {max}&deg;C
      </div>
      <div
        className="forecast-details__humidity"
        data-testid="forecast-details__humidity"
      >
        {humidity}%
      </div>
      <div
        className="forecast-details__windspeed"
        data-testid="forecast-details__windspeed"
      >
        {windspeed} km/h
      </div>
      <div
        className="forecast-details__direction"
        data-testid="forecast-details__direction"
      >
        {direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
