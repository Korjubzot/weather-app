// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage,
  searchText
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;

      if (status === 404) {
        setErrorMessage("No such city or town. Try again!");
        console.error("Invalid location", error);
      }
      if (status === 500) {
        setErrorMessage(
          "Oopsie woopsie! I made a wittle fucky wucky uwu~",
          error
        );
        console.error("Error: problem with server");
      }
    });
};

export default getForecast;
