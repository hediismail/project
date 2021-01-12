const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Profile = require("./profile");
const User = require("./User");
const ReservationSchema = new schema({
  profileId: {
    type: schema.Types.ObjectId,
    ref: "Profile",
  },
  userId: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  reservationType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
