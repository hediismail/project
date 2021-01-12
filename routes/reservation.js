const express = require("express");
const reservationRouter = express.Router();
const Profile = require("../models/profile");
const User = require("../models/User");
const Reservation = require("../models/reservation");
const isAuth = require("../middleware/passport");
const controllers = require("../controllers/reservation");

//method post
//path /:id
reservationRouter.post("/:id", isAuth(), controllers.addReservation);
//method get
//path /requests/:id_artist
reservationRouter.get("/requests/:id_artist", isAuth(), async (req, res) => {
  try {
    const result = await Reservation.find({
      $and: [{ profileId: req.params.id_artist }, { confirmed: false }],
      // profileId: req.params.id,
      // confirmed: false,
    });
    res.send({ reservations: result, msg: "getting all reservations" });
  } catch (error) {
    res.status(400).send({ msg: "can not get the reservations" });
  }
});

// Method post

reservationRouter.post("/requests/:id_reservation", async (req, res) => {
  try {
    const result = await Reservation.updateOne(
      { _id: req.params.id_reservation },
      { $set: { confirmed: true } }
    );
    res.status(200).send({ reservations: result, msg: "accepted" });
  } catch (error) {
    res.status(400).send({ msg: "can not accept the request" });
  }
});

reservationRouter.delete("/requests/:id_reservation", async (req, res) => {
  try {
    const result = await Reservation.deleteOne({
      _id: req.params.id_reservation,
    });
    res.status(200).send({ reservations: result, msg: "declined" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete the request" });
  }
});

// get all accepted reservation
reservationRouter.get("/accepted/:id_artist", async (req, res) => {
  try {
    const result = await Reservation.find({
      $and: [{ profileId: req.params.id_artist }, { confirmed: true }],
    });
    res.send({ reservations: result, msg: "getting all reservations" });
  } catch (error) {
    res.status(400).send({ msg: "can not get the reservations" });
  }
});
module.exports = reservationRouter;
