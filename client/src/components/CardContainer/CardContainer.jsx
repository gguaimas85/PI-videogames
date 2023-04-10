import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import "./CardContainer.css";

export default function CardContainer() {
  const videogames = useSelector((state) => state.videogames);

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = videogames.length;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  

  return (
    <>
      <div className="cardcontainer">
        {!videogames ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          videogames.map((videogame) => (
            <Link
              to={`/videogame/${videogame.id}`}
              key={videogame.id}
              className="link"
            >
              <Card props={videogame} />
            </Link>
          )).slice(firstIndex, lastIndex)
        )}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
      />
    </>
  );
}
