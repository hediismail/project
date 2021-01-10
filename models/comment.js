const mongoose = require('mongoose');
const schema = mongoose.Schema;
const User = require('./User');
const Profile = require('./profile');
const CommentSchema = new schema({
	userId: {
		type: schema.Types.ObjectId,
		ref: 'User',
	},
	userName: {
		type: String,
		required: true,
	},
	userLastName: {
		type: String,
		required: true,
	},
	commentId: {
		type: schema.Types.ObjectId,
		ref: 'Profile',
	},
	comment: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Comment', CommentSchema);
