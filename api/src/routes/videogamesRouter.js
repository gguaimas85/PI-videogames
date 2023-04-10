const { Router } = require('express');
const { getAllVideogamesHandler, getVideogameByIdHandler, createVideogameHandler} = require('../handlers/videogamesHandler');

const videogamesRouter = Router();

videogamesRouter.get("/:id", getVideogameByIdHandler);
videogamesRouter.get("/", getAllVideogamesHandler);
videogamesRouter.post("/", createVideogameHandler);


module.exports = videogamesRouter;