import React from "react";
import './Card.css';

export default function Card({ props }) {
  let genres = props.genres.join(', ');
  
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <h3 className="card-title">{props.name}</h3>
      <p className="card-genres">Genres: {genres}</p>
    </div>
  );
}
