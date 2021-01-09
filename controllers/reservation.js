const mongoose = require("mongoose");
const Profile = require("../models/profile");
const User = require("../models/User");
const Reservation = require("../models/reservation");

exports.addReservation = async (req, res) => {
  const { firstName, lastName, reservationType, date } = req.body;
  try {
    const Reservation1 = new Reservation({
      profileId: req.params.id,
      userId: req.user._id,
      firstName,
      lastName,
      reservationType,
      date,
    });
    const newReservation = await Reservation1.save();
    res
      .status(200)
      .send({ reservation: newReservation, msg: "reservation saved" });
  } catch (error) {
    res.status(400).send({ msg: "can not save the request", err: error });
  }
};
