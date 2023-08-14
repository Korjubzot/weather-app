/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <label htmlFor="searchInput">Search cities</label>
      <input
        type="text"
        id="searchInput"
        name="searchInput"
        onChange={handleInputChange}
        value={searchText}
      />
      <button type="submit" name="searchButton" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
