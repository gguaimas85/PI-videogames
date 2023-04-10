const { Router } = require("express");
const multer = require("multer");
const path = require("path");

const imageRouter = Router();

const diskStorage = multer.diskStorage({
  destination: path.join(__dirname, "../images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileUplaod = multer({
  storage: diskStorage,
}).single("image");

imageRouter.post("/post", fileUplaod, (req, res) => {
  const destination = req.file.path;
  console.log(destination);
  res.send(destination)
  
});

module.exports = imageRouter;
