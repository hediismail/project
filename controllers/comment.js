const Comment = require("../models/comment");
exports.addComment = async (req, res) => {
  const { comment } = req.body;
  console.log(req.user);
  try {
    const newComment = new Comment({
      userId: req.user._id,
      profileId: req.params.id,
      comment,
    });

    // save the Comment
    const newComment1 = await newComment.save();
    console.log(newComment1);
    res.status(200).send({
      comment: newComment1,
      msg: "comment is saved",
    });
  } catch (error) {
    console.log(error);
  }
};
