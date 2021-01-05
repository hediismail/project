const mongoose = require("mongoose");
const schema = mongoose.Schema;
const User = require("./User");
const ProfileSchema = new schema({
  userId: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  profileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
  },
  fileName: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  catégorie: {
    type: String,
    required: true,
  },
  région: {
    type: String,
    required: true,
  },
  // Request: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

module.exports = mongoose.model("Profile", ProfileSchema);
