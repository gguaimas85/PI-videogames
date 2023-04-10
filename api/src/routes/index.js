const { Router } = require("express");
const genresRouter = require("./genresRouter");
const videogamesRouter = require("./videogamesRouter");
const imageRouter = require("./imageRouter");
const platformsRouter = require("./platformsRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genresRouter);
router.use("/platforms", platformsRouter);
router.use("/images", imageRouter);
router.use("/videogames", videogamesRouter);

module.exports = router;
