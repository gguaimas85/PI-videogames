import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter/Filter";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Home.css";
import {
  getAllGenres,
  getAllPlatforms,
  getAllVideogames,
} from "../../redux/action";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videogames = useSelector((state) => state.videogames);
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = videogames.length;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  return (
    <>
      <div className="container-home">
        <Filter />
        <div className="cardcontainer-home">
          <CardContainer firstIndex={firstIndex} lastIndex={lastIndex} />
        </div>
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
