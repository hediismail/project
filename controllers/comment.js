const Comment = require('../models/comment');

exports.addComment = async (req, res) => {
	const { comment } = req.body;
	try {
		const newComment = new Comment({
			userId: req.user._id,
			userName: req.user.name,
			userLastName: req.user.lastName,
			commentId: req.params.id,
			comment,
		});

		// save the Comment
		const newComment1 = await newComment.save();
		res.status(200).send({
			comment: newComment1,
			msg: 'comment is saved',
		});
	} catch (error) {
		res.send({ msg: 'comment not saved' });
	}
};
