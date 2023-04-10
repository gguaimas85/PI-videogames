const getAllPlatforms = require("../controllers/platformsController.js");

const getAllPlatformsHandler = async (req, res) =>{
    try {
        const result = await getAllPlatforms();

        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

module.exports = getAllPlatformsHandler;