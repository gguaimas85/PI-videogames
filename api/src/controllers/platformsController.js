const axios = require("axios");
const genresFromAPI = require("../../genresAPI");
require("dotenv").config();
const { API_KEY } = process.env;
const { Platform } = require("../db");

const createPlatforms = async () => {
  let platformsAPI = (
    await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
  ).data.results;

  let namesPlatforms = platformsAPI.map((el) => el.name);

  await namesPlatforms.forEach((element) => {
    Platform.findOrCreate({
      where: { name: element },
    });
  });
};

async function getAllPlatforms() {
  await createPlatforms();

  const platformsDB = await Platform.findAll();

  return platformsDB;
}

module.exports = getAllPlatforms;
