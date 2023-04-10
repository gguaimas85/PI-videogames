import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useSelector } from "react-redux";

export default function Form() {
  const platforms = useSelector((state) => state.platforms);
  const genres = useSelector((state) => state.genres);

  const [form, setForm] = useState({
    name: "",
    image: "",
    platforms: [],
    released: "",
    rating: "",
    genres: [],
    description: "",
  });

  const changeHandler = async (event) => {
    const property = event.target.name;
    const value = event.target.value;

    console.log({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const changeHandlerSelect = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (value !== "") {
      setForm({
        ...form,
        [property]: [...form[property], value],
      });
    }
  };

  document.addEventListener("keypress", function (evt) {
    // Si el evento NO es una tecla Enter
    if (evt.key !== "Enter") {
      return;
    }

    let element = evt.target;

    // Si el evento NO fue lanzado por un elemento con class "focusNext"
    if (!element.classList.contains("focusNext")) {
      return;
    }

    // AQUI logica para encontrar el siguiente
    let tabIndex = element.tabIndex + 1;
    var next = document.querySelector('[tabindex="' + tabIndex + '"]');

    // Si encontramos un elemento
    if (next) {
      next.focus();
      evt.preventDefault();
    }
  });

  const submitHandler = async (event) => {
    console.log(form);
    event.preventDefault();

    if (Object.values(form).some((value) => value.length === 0)) {
      alert("Some values ​​are undefined");
      return;
    }

    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res.data))
      .catch((error) => console.log(error.response.data.message));

    setForm({
      name: "",
      image: "",
      platforms: [],
      released: "",
      rating: "",
      genres: [],
      description: "",
    });
    return;
  };

  return (
    <div className="container-form">
      <h2 className="title-form">Create Videogame</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-data">
          <label className="label">Name: </label>
          <input
            type="text"
            className="input focusNext"
            name="name"
            value={form.name}
            onChange={changeHandler}
            tabIndex="1"
          />
        </div>
        <div className="input-data">
          <label className="label">Image: </label>
          <input
            type="text"
            className="input focusNext"
            name="image"
            value={form.image}
            onChange={changeHandler}
            tabIndex="2"
            placeholder="URL image"
          />
        </div>
        <div className="input-data">
          <label className="label">Platforms: </label>
          <select
            name="platforms"
            id="platforms"
            className="input focusNext"
            tabIndex="3"
            onChange={changeHandlerSelect}
          >
            <option value="">Select Platform</option>
            {platforms.map((p) => (
              <option value={p.name} key={p.id} id={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <ul>
          <li>{form.platforms.map((el) => el + ", ")}</li>
        </ul>
        <div className="input-data">
          <label className="label">Released: </label>
          <input
            type="text"
            className="input focusNext"
            name="released"
            value={form.released}
            onChange={changeHandler}
            placeholder="yyyy-mm-dd"
            tabIndex="4"
          />
        </div>
        <div className="input-data">
          <label className="label">Rating: </label>
          <input
            type="text"
            className="input focusNext"
            name="rating"
            value={form.rating}
            onChange={changeHandler}
            placeholder="1 - 5"
            tabIndex="5"
          />
        </div>
        <div className="input-data">
          <label className="label">Genre: </label>
          <select
            name="genres"
            id="genres"
            className="input focusNext"
            tabIndex="6"
            onChange={changeHandlerSelect}
          >
            <option value="">Select Genre</option>
            {genres.map((g) => (
              <option value={g.name} key={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <ul>
          <li>{form.genres.map((el) => el + ", ")}</li>
        </ul>
        <div className="input-data input-textarea">
          <label className="label">Description: </label>
          <textarea
            type="text"
            className="data-textarea focusNext"
            name="description"
            value={form.description}
            onChange={changeHandler}
            tabIndex="7"
          />
        </div>
        <button type="submit" className="button-create" tabIndex="8">
          Save
        </button>
      </form>
    </div>
  );
}
