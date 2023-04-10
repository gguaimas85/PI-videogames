import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../../redux/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) =>{
    e.preventDefault();

    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(getVideogameByName(name))
    setName("")
  }

  return (
    <div className="searchbar">
      <h3>Searchbar</h3>
      <input type="text" placeholder="Search Videogame" onChange={e => handleInputChange(e)}/>
      <button type="submit" onClick={e => handleSubmit(e)}>Search</button>
    </div>
  );
}
