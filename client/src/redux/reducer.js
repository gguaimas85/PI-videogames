import {
  GET_ALL_VIDEOGAMES,
  GET_VIDEOGAME_BY_ID,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  FILTER_BY_GENRE,
  FILTER_CREATED,
  ORDER_BY_NAME,
  GET_VIDEOGAME_BY_NAME,
} from "./action";

const intialStore = {
  videogames: [],
  allVideogames: [],
  details: [],
  genres: [],
  platforms: [],
};

const rootReducer = (state = intialStore, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const genresFilter =
        action.payload === "All"
          ? allVideogames
          : allVideogames.filter((el) => el.genres.includes(action.payload));
      return {
        ...state,
        videogames: genresFilter,
      };
    case FILTER_CREATED:
      const allVideogame = state.allVideogames;
      const createdFilter =
        action.payload === "DB"
          ? allVideogame.filter((el) => el.created)
          : allVideogame.filter((el) => !el.created);
      return {
        ...state,
        videogames:
          action.payload === "All" ? state.allVideogames : createdFilter,
      };
    case ORDER_BY_NAME:
      let sortedArr =
        action.payload === "asc"
          ? state.allVideogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.allVideogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });

      console.log(sortedArr);
      return { ...state, videogames: sortedArr };
    case GET_VIDEOGAME_BY_ID:
      return { ...state, details: action.payload };
    case GET_ALL_GENRES:
      return { ...state, genres: action.payload };
    case GET_ALL_PLATFORMS:
      return { ...state, platforms: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
