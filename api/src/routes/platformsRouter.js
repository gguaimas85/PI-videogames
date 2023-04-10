const { Router } = require('express');
const getAllPlatformsHandler = require('../handlers/platformsHandler.js');

const platformsRouter =  Router();

platformsRouter.get("/", getAllPlatformsHandler);

module.exports = platformsRouter;