import React, { useState } from "react";

const EmployeeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default EmployeeSearch;
