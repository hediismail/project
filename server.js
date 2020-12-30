console.clear()
const express = require('express')
const connectDB = require('./config/dbConnect')
const path = require('path')
const app = express()
const fileUpload = require('express-fileupload')
require('dotenv').config()

// connect to DB
connectDB()

// routes
// app.use(fileUpload())
app.use(express.json())
app.use('/user', require('./routes/user'))
app.use('/profile', require('./routes/profile'))
app.use('/comment', require('./routes/comment'))
app.use('/publication', require('./routes/publication'))
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, './pubPhoto')))

// server
const PORT = process.env.PORT
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`),
)
