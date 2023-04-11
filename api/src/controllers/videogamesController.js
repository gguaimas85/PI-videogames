const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../db");

const getAllVideogames = async () => {
  let videogamesAPI = [];
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  for (let i = 0; i < 5; i++) {
    let dataAPI = (await axios.get(url)).data;

    videogamesAPI.push(dataAPI.results);

    url = dataAPI.next;
  }

  const videogamesClean = cleanDataAPI(videogamesAPI.flat());

  const videogamesDB = await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Platform,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  const videogamesDBClean = cleanDataDB(videogamesDB);

  const result = [...videogamesDBClean, ...videogamesClean];

  return result;
};

const cleanDataDB = (arr) => {
  const cleanArray = arr.map((el) => {
    let nameGenres = el.genres.map((el) => el.name);
    let namePlatforms = el.platforms.map((el) => el.name);

    return {
      id: el.id,
      name: el.name,
      image: el.image,
      platforms: namePlatforms,
      released: el.released,
      rating: el.rating,
      genres: nameGenres,
      description: el.description,
      created: el.created,
    };
  });

  return cleanArray;
};

const cleanDataAPI = (arr) => {
  const cleanArray = arr.map((el) => {
    let nameGenres = el.genres.map((el) => el.name);
    let namePlatforms = el.platforms
      .map((el) => el.platform)
      .map((el) => el.name);

    return {
      id: el.id,
      name: el.name,
      image: el.background_image,
      platforms: namePlatforms,
      released: el.released,
      rating: el.rating,
      genres: nameGenres,
      description: el.description_raw,
    };
  });

  return cleanArray;
};

const getVideogameById = async (id, source) => {
  let videogame = [];

  if (source === "api") {
    let idNumer = parseInt(id);

    let dataAPI = (
      await axios.get(`https://api.rawg.io/api/games/${idNumer}?key=${API_KEY}`)
    ).data;

    const videogameIdAPI = [dataAPI];

    videogame = cleanDataAPI(videogameIdAPI);
  }
  if (source === "db") {
    let dataDB = await Videogame.findOne({
      where: { id: id },
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    console.log(dataDB);

    const videogameDB = [dataDB];

    videogame = cleanDataDB(videogameDB);
  }

  return videogame;
};

const getVideogameByName = async (name) => {
  const dataDBvideogames = await Videogame.findAll({
    where: {
      name: name,
    },
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        model: Platform,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  let dataAPI = (
    await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    )
  ).data;

  const videogamesByNameAPI = dataAPI.results;

  const vidoegamesDBNameClean = cleanDataDB(dataDBvideogames);

  const videogamesDBClean = cleanDataAPI(videogamesByNameAPI);

  const result = [...vidoegamesDBNameClean, ...videogamesDBClean];

  const firstFifteen = result.slice(0, 15);

  return firstFifteen;
};

const createVideogame = async (
  name,
  description,
  platforms,
  image,
  released,
  rating,
  genres
) => {
  let newVideogame = {
    name,
    description,
    image,
    released,
    rating,
  };

  if (Object.values(newVideogame).some((value) => value.length === 0)) {
    throw Error(`Some values ​​are undefined`);
  }

  const newVideogameDB = await Videogame.create({
    name,
    description,
    image,
    released,
    rating,
  });

  let genreDB = await Genre.findAll({
    where: { name: genres },
  });

  await newVideogameDB.addGenres(genreDB);

  let platformsDB = await Platform.findAll({
    where: { name: platforms },
  });

  await newVideogameDB.addPlatforms(platformsDB);

  // const result = newVideogameDB;
  // return result;
};

module.exports = {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  createVideogame,
};
