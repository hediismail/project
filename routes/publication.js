const express = require("express");
const routerPublication = express.Router();
const Profile = require("../models/profile");
const User = require("../models/User");
const Publication = require("../models/Publication");
const isAuth = require("../middleware/passport");
const multer = require("multer");

//uploading of photo
//storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../pubPhoto`);
  },
  filename: (req, file, cb) => {
    let lastIndex = file.originalname.lastIndexOf(".");
    // Get Original File Extension
    let extension = file.originalname.substring(lastIndex);
    // Create the file on the server
    cb(null, "img" + "-" + Date.now() + extension);
  },
});

// Image Upload function
const pubPhoto = multer({ storage: storage });

routerPublication.post(
  "/pub/:id",
  isAuth(),
  pubPhoto.single("avatar"),
  async (req, res) => {
    const { publicationPhoto, publication } = req.body;
    try {
      const Publication1 = new Publication({
        profileId: req.params.id,
        userId: req.user._id,
        publicationPhoto,
        publication,
      });

      const newPublication = await Publication1.save();
      // populate
      // const publication2 = await newPublication.populate(
      //   "profileId",
      //   "contact"
      // );
      res.status(200).send({
        publication: newPublication,
        msg: "publication is saved",
      });
    } catch (error) {
      console.log(error);
    }
  }
);

routerPublication.get("/:id", async (req, res) => {
  try {
    const result = await Publication.find({ profileId: req.params.id });
    // console.log(result);
    res.send({ publications: result, msg: "getting all the publication" });
  } catch (error) {
    res.status(400).send({ msg: "can not get publication" });
  }
});

module.exports = routerPublication;
