import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../../redux/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getVideogameByName(name));
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        className="search-videogame"
        placeholder="Search Videogame"
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" className="button-search" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
