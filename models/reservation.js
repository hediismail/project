const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Profile = require('./profile');
const User = require('./User');
const ReservationSchema = new schema({
	profileId: {
		type: schema.Types.ObjectId,
		ref: 'Profile',
	},
	userId: {
		type: schema.Types.ObjectId,
		ref: 'User',
	},
	FirstName: {
		type: String,
	},
	LastName: {
		type: String,
	},
	reservationType: {
		type: String,
	},
	date: {
		type: String,
	},
});

module.exports = mongoose.model('Reservation', ReservationSchema);
