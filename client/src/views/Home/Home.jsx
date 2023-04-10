import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Home.css";
import {
  getAllGenres,
  getAllPlatforms,
  getAllVideogames,
} from "../../redux/action";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-home">
      <Filter />
      <div className="cardcontainer-home">
        <CardContainer />
      </div>
    </div>
  );
}
