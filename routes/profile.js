const express = require('express')
const routerProfile = express.Router()
const Profile = require('../models/profile')
const User = require('../models/User')
const controllers = require('../controllers/profile')
const isAuth = require('../middleware/passport')

routerProfile.post(`/editprofile`, isAuth(), controllers.editProfile)

routerProfile.get('/', controllers.getAllProfiles)

routerProfile.delete('/:id', controllers.deleteOneProfile)

module.exports = routerProfile
