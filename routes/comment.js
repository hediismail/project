const express = require('express');
const routerComment = express.Router();
const mongoose = require('mongoose');
const Profile = require('../models/profile');
const User = require('../models/User');
const Comment = require('../models/comment');
const isAuth = require('../middleware/passport');
const controllers = require('../controllers/comment');

routerComment.post('/:id', isAuth(), controllers.addComment);

module.exports = routerComment;
