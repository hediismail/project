module.exports = isArtist = function (req, res, next) {
	if (req.user.role == 'Artist') {
		return next();
	}
	return res.status(400).send({ msg: 'you are not an artist...' });
};
