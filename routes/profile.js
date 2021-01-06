const express = require('express');
const routerProfile = express.Router();
const Profile = require('../models/profile');
const User = require('../models/User');
const controllers = require('../controllers/profile');
const isAuth = require('../middleware/passport');
const isArtist = require('../middleware/isArtist');
const uploadImage = require('../middleware/uploadImage');

routerProfile.post(
  '/editprofile',
  [isAuth(), isArtist],
  uploadImage,
  controllers.editProfile
);

routerProfile.get('/', controllers.getAllProfiles);

routerProfile.delete('/:id', controllers.deleteOneProfile);

routerProfile.get('/:id', isAuth(), controllers.getOneProfile);

routerProfile.put('/:id', isAuth(), uploadImage, controllers.updateProfile);
routerProfile.put('/calendrier/:id', isAuth(), controllers.updateCalendrier);

module.exports = routerProfile;
