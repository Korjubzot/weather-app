import "../styles/App.css";
import "../styles/ForecastSummaries.css";
import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails
        date={forecasts[0].date}
        temperature={forecasts[0].temperature}
        humidity={forecasts[0].humidity}
        wind={forecasts[0].wind}
        forecast={selectedForecast}
      />
    </div>
  );
}

export default App;
