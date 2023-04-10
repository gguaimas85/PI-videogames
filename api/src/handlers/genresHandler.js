const getAllGenres = require("../controllers/genresController");

const getAllGenresHandler = async (req, res) =>{
    try {
        const result = await getAllGenres();

        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

module.exports = getAllGenresHandler;