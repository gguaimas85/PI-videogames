import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCreated,
  filterVideogamesByGenre,
  orderByName,
} from "../../redux/action";

export default function Filter() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const handlerFilterGenre = async (event) => {
    const value = event.target.value;

    dispatch(filterVideogamesByGenre(value));
  };

  const handlerFilterCreated = async (event) => {
    const value = event.target.value;

    dispatch(filterCreated(value));
  };

  const handlerSort = (event) => {
    event.preventDefault();
    const value = event.target.value;

    dispatch(orderByName(value));
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div>
        <h3>From</h3>
        <select
          name="data-from"
          id="from"
          className="select-filter"
          onChange={(e) => handlerFilterCreated(e)}
        >
          <option value="All">All Vidieogames</option>
          <option value="API">API</option>
          <option value="DB">DATABASE</option>
        </select>
      </div>
      <div>
        <h3>Genres</h3>
        <select
          name="genres"
          id="genres"
          onChange={(e) => handlerFilterGenre(e)}
        >
          <option value="All">All Genres</option>
          {genres.map((g) => (
            <option value={g.name} key={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Order</h3>
        <select name="data-order" id="order" onChange={(e) => handlerSort(e)}>
          <option value="">Select Order</option>
          <option value="asc">A - Z </option>
          <option value="des">Z - A</option>
        </select>
      </div>
    </div>
  );
}
