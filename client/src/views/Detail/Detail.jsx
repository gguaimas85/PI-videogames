import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getVideogameByID } from "../../redux/action";
import './Detail.css'

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogameByID(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videogamesDetail = useSelector((state) => state.details);

  return (
    <div className='container-detail'>
      {videogamesDetail.map((el) => {
        let platformsVG = el.platforms.join(", ");
        let genresVG = el.genres.join(", ");

        return (
          <div key={el.id} className="detail-data">
            <img src={el.image} alt={`Videogame ${el.name}`} className='detail-image'/>
            <div >
              <h2 className="detail-title">{el.name}</h2>
              <p>ID: {el.id}</p>
              <p>{platformsVG}</p>
              <p>Released: {el.released}</p>
              <p>Rating: {el.rating}</p>
              <p>{genresVG}</p>
              <p className="info-detail">{el.description}</p>
            </div>
          </div>
        );
      })}
      <Link to="/home" className="back-link">Volver</Link>
    </div>
  );
}
