import React from "react";

function LocationDetails(props) {
  LocationDetails.defaultProps = {
    errorMessage: "",
  };

  function refreshPage() {
    window.location.reload(false);
  }
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <>
      <h1>{errorMessage}</h1>
      <div>
        <button type="button" onClick={refreshPage}>
          Click to reload
        </button>
      </div>
    </>
  ) : (
    <h1>{`${city}, ${country}`} </h1>
  );
}

export default LocationDetails;
