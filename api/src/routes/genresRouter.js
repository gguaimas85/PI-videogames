const { Router } = require('express');
const getAllGenresHandler = require('../handlers/genresHandler');

const genresRouter =  Router();

genresRouter.get("/", getAllGenresHandler);

module.exports = genresRouter;