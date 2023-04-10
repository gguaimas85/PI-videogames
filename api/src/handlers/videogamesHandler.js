const {
  getAllVideogames,
  getVideogameById,
  getVideogameByName,
  createVideogame,
} = require("../controllers/videogamesController");

const getAllVideogamesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const data = name
      ? await getVideogameByName(name)
      : await getAllVideogames();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: "Data not found" });
  }
};

const getVideogameByIdHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";

  try {
    const dataByID = await getVideogameById(id, source);

    res.status(200).json(dataByID);
  } catch (error) {
    res.status(404).json({ message: "ID not found" });
  }
};

const createVideogameHandler = async (req, res) => {
  const { name, description, platforms, image, released, rating, genres } =
    req.body;

  try {
    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genres
    );
    res.status(201).json(`Videogame ${name} created`);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: `${error}` });
  }
};

module.exports = {
  getAllVideogamesHandler,
  getVideogameByIdHandler,
  createVideogameHandler,
};
