const Profile = require('../models/profile')
const mongoose = require('mongoose')
const User = require('../models/User')
const ProfileModel = mongoose.model('Profile')
const isAuth = require('../middleware/passport')
exports.editProfile = async (req, res) => {
  const { profileName, contact, about } = req.body

  try {
    const newProfile = new Profile({
      userId: req.params.id,
      profileName,
      contact,
      about,
    })

    // save the profile
    const newProfile1 = await newProfile.save()
    // const newProfileId = await ProfileModel.findOne({
    //   userId: newProfile1.userId,
    // })
    //   // .populate('userId')
    //   .populate({ path: 'userId', select: 'name lastName email' })
    //   .lean()
    const newProfileId = await newProfile1
      .populate('userId', 'name lastName')
      .execPopulate()

    console.log({ profile: newProfileId })
    res.status(200).send({
      profile: newProfileId,
      msg: 'profile is saved',
    })
  } catch (error) {
    console.log(error)
  }
}
