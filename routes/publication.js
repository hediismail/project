const express = require("express");
const routerPublication = express.Router();
const Profile = require("../models/profile");
const User = require("../models/User");
const Publication = require("../models/Publication");
const multer = require("multer");
const isAuth = require("../middleware/passport");
const isArtist = require("../middleware/isArtist");
let photoName = "";
// uploading of photo
// storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../pubPhoto`);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    let lastIndex = file.originalname.lastIndexOf(".");
    // Get Original File Extension
    let extension = file.originalname.substring(lastIndex);
    // Create the file on the server
    photoName = "img" + "-" + Date.now() + extension;
    cb(null, photoName);
  },
});

// Image Upload function

const pubPhoto = multer({ storage: storage });

routerPublication.post(
  "/pub/:id",
  isAuth(),
  isArtist,
  pubPhoto.single("avatar"),
  async (req, res) => {
    const { publication } = req.body;
    try {
      // console.log(req.file.buffer);
      const Publication1 = new Publication({
        profileId: req.params.id,
        userId: req.user._id,
        publicationPhoto: photoName,
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
      res.status(400).send({ msg: "publication can not be saved" });
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

routerPublication.delete("/:id", [isAuth(), isArtist], async (req, res) => {
  try {
    const result = await Publication.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ msg: "the publication has been deleted" })
      : res.send({ msg: "there is no publication with this id" });
  } catch (error) {
    res.status(400).send({ msg: "there is no publication with this id" });
  }
});

routerPublication.put("/:id", isAuth(), async (req, res) => {
  try {
    const result = await Publication.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "the publication is updated" });
  } catch (error) {
    res.status(400).send({ msg: "there is no publication with this id" });
  }
});

module.exports = routerPublication;
