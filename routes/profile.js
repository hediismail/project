const express = require('express')
const routerProfile = express.Router()
const Profile = require('../models/profile')
const User = require('../models/User')
const controllers = require('../controllers/profile')

routerProfile.post(`/editprofile/:id`, controllers.editProfile)
module.exports = routerProfile
