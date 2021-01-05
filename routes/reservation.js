const express = require("express");
const reservationRouter = express.Router();
const Profile = require("../models/profile");
const User = require("../models/User");
const Reservation = require("../models/reservation");
const controllers = require("../controllers/profile");
const isAuth = require("../middleware/passport");

reservationRouter.post("/:id", isAuth(), async (req, res) => {
  try {
    const Reservation1 = new Reservation({
      profileId: req.params.id,
      FirstName,
      lastName,
      reservationType,
      date,
    });
    const newReservation = await Reservation1.save();
    res
      .status(200)
      .send({ reservation: newReservation, msg: "reservation saved" });
  } catch (error) {
    res.status(400).send({ msg: "can not save the request" });
  }
});

module.exports = reservationRouter;
