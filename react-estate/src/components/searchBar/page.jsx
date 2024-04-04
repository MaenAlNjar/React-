import React, { useState } from "react";
import "./searchBar.css";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" className="" placeholder="City Location" />
        <input
          type="number"
          className=""
          min={0}
          max={1000}
          placeholder="Min Price"
        />
        <input
          type="number"
          className=""
          min={0}
          max={1000}
          placeholder="Max Price"
        />
        <button>
          <img src="./search.png" alt="search"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
