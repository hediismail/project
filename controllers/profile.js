const Profile = require("../models/profile");
const mongoose = require("mongoose");
const User = require("../models/User");
const ProfileModel = mongoose.model("Profile");
const isAuth = require("../middleware/passport");
exports.editProfile = async (req, res) => {

  const { profileName, contact, about, catégorie, région } = req.body


  try {
    const newProfile = new Profile({
      userId: req.user._id,
      profileName,
      contact,
      about,

      catégorie,
      région,
    })

    // save the profile
    const newProfile1 = await newProfile.save();
    // const newProfileId = await ProfileModel.findOne({
    //   userId: newProfile1.userId,
    // })
    //   // .populate('userId')
    //   .populate({ path: 'userId', select: 'name lastName email' })
    //   .lean()

    // const newProfileId = await newProfile1
    //   .populate('userId', 'name lastName')
    //   .execPopulate()

    // console.log({ profile: newProfileId })
    res.status(200).send({
      profile: newProfile1,
      msg: 'profile is saved',
    })
  } catch (error) {
    console.log(error);
  }
};
exports.getAllProfiles = async (req, res) => {
  try {
    const result = await Profile.find();
    res.send({ profiles: result, msg: "getting all profiles" });
  } catch (error) {
    res.status(400).send({ msg: "can not get profiles" });
  }
};
exports.deleteOneProfile = async (req, res) => {
  try {
    const result = await Profile.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "profile deleted" })
      : res.send({ response: "there is no profile with this id" });
  } catch (error) {}
}
exports.getOneProfile = async (req, res) => {
  try {
    const result = await Profile.find({ _id: req.params.id })
    res.send({ profiles: result, msg: 'getting the profile' })
  } catch (error) {
    res.status(400).send({ msg: 'can not get profile' })
  }
}

