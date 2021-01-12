console.clear();
const express = require('express');
const connectDB = require('./config/dbConnect');
const path = require('path');
const app = express();
require('dotenv').config();

// connect to DB
connectDB();

// routes
app.use(express.json());
app.use('/user', require('./routes/user'));
app.use('/profile', require('./routes/profile'));
app.use('/publication', require('./routes/publication'));
app.use('/reservation', require('./routes/reservation'));
app.use(express.urlencoded({ extended: true }));

// server
const PORT = process.env.PORT;
app.listen(PORT, (err) => (err ? console.log(err) : console.log(`server is running on ${PORT}`)));
