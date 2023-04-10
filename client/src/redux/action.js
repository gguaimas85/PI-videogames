import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const GET_VIDEOGAME_BY_NAME = "GET_VIDEOGAME_BY_NAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

//actions Videogames
export const getAllVideogames = () => {
  return async function (dispatch) {
    const dataVidoegames = await axios.get(`http://localhost:3001/videogames`);

    const videogames = dataVidoegames.data;

    dispatch({ type: GET_ALL_VIDEOGAMES, payload: videogames });
  };
};

export const filterVideogamesByGenre = (payload) => {
  console.log(payload);
  return {
    type: FILTER_BY_GENRE,
    payload,
  };
};

export const getVideogameByID = (id) => {
  return async function (dispatch) {
    const dataVidoegamesID = await axios.get(
      `http://localhost:3001/videogames/${id}`
    );

    const videogamesID = dataVidoegamesID.data;

    dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogamesID });
  };
};

export const getVideogameByName = (name) => {
  return async function (dispatch) {
    const dataVideogameByName = await axios.get(
      `http://localhost:3001/videogames/?name=${name}`
    );

    const vidoegameByName = dataVideogameByName.data;

    dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: vidoegameByName });
  };
};

export const orderByName = (payload) =>{
  return{
    type: ORDER_BY_NAME,
    payload
  }
}

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

//actions Genres
export const getAllGenres = () => {
  return async function (dispatch) {
    const dataGenres = await axios.get(`http://localhost:3001/genres`);

    const genres = dataGenres.data;

    dispatch({ type: GET_ALL_GENRES, payload: genres });
  };
};

//actions Platforms
export const getAllPlatforms = () => {
  return async function (dispatch) {
    const dataPlatforms = await axios.get(`http://localhost:3001/platforms`);

    const platforms = dataPlatforms.data;

    dispatch({ type: GET_ALL_PLATFORMS, payload: platforms });
  };
};
