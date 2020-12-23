const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Profile = require("./profile");
const PublicationSchema = new schema({
  profileId: {
    type: schema.Types.ObjectId,
    ref: "Profile",
  },
  userId: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  publicationPhoto: {
    type: String,
  },
  publication: {
    type: String,
  },
});

module.exports = mongoose.model("Publication", PublicationSchema);
