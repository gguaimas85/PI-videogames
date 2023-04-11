const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Genre } = require("../db");

const createGenres = async () => {
  let genresAPI = (
    await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
  ).data.results;
  let namesGenres = genresAPI.map((el) => el.name);

  await namesGenres.forEach((element) => {
    Genre.findOrCreate({
      where: { name: element },
    });
  });
};

const getAllGenres = async () => {
  await createGenres();

  const genresDB = await Genre.findAll();

  return genresDB;
};

module.exports = getAllGenres;
