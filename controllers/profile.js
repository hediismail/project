const Profile = require('../models/profile')
const mongoose = require('mongoose')
const User = require('../models/User')
// const ProfileModel = mongoose.model("Profile");
const isAuth = require('../middleware/passport')

exports.editProfile = async (req, res) => {
  if (req.files === null) {
    return res.status(400).send({ msg: 'there is no file to upload' })
  }
  const file = req.files.file
  const { profileName, contact, about, catégorie, région } = req.body
  const newProfile = new Profile({
    userId: req.user._id,
    profileName,
    contact,
    about,
    catégorie,
    région,
    fileName: file.name,
    filePath: `/images/${file.name}`,
  })
  const newProfile1 = await newProfile.save()
  file.mv(`${__dirname}/../client/public/images/${file.name}`, (err) => {
    if (err) {
      console.log(err)
    }
    res.status(200).send({ profile: newProfile1, msg: 'profile is saved' })
  })
}

exports.getAllProfiles = async (req, res) => {
  try {
    const result = await Profile.find()
    res.send({ profiles: result, msg: 'getting all profiles' })
  } catch (error) {
    res.status(400).send({ msg: 'can not get profiles' })
  }
}
exports.deleteOneProfile = async (req, res) => {
  try {
    const result = await Profile.deleteOne({ _id: req.params.id })
    result.n
      ? res.send({ response: 'profile deleted' })
      : res.send({ response: 'there is no profile with this id' })
  } catch (error) {
    console.log(error)
  }
}
exports.getOneProfile = async (req, res) => {
  try {
    const result = await Profile.find({ _id: req.params.id })
    res.send({ profile: result, msg: 'getting the profile' })
  } catch (error) {
    res.status(400).send({ msg: 'can not get profile' })
  }
}
