import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
//import Pagination from "../Pagination/Pagination";
import "./CardContainer.css";

export default function CardContainer({ firstIndex, lastIndex }) {
  const videogames = useSelector((state) => state.videogames);

  return (
    <>
      <div className="cardcontainer">
        {!videogames ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          videogames
            .map((videogame) => (
              <Link
                to={`/videogame/${videogame.id}`}
                key={videogame.id}
                className="link"
              >
                <Card props={videogame} />
              </Link>
            ))
            .slice(firstIndex, lastIndex)
        )}
      </div>
    </>
  );
}
