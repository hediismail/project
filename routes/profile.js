const express = require("express");
const routerProfile = express.Router();
const Profile = require("../models/profile");
const User = require("../models/User");
const controllers = require("../controllers/profile");
const isAuth = require("../middleware/passport");
const isArtist = require("../middleware/isArtist");

routerProfile.post(`/editprofile/:id`, controllers.editProfile);

routerProfile.get("/", controllers.getAllProfiles);

routerProfile.delete("/:id", controllers.deleteOneProfile);

module.exports = routerProfile;
