const express = require('express');
const routerPublication = express.Router();
const Profile = require('../models/profile');
const User = require('../models/User');
const Publication = require('../models/Publication');
const multer = require('multer');
const isAuth = require('../middleware/passport');
const isArtist = require('../middleware/isArtist');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, `${__dirname}/../client/public/photos`);
	},
	filename: (req, file, cb) => {
		console.log(file.originalname);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype == 'image/jpg' ||
		file.mimetype == 'image/jpeg' ||
		file.mimetype == 'image/png' ||
		file.mimetype == 'image/gif'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
// Image Upload function

const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
	limits: { fileSize: 10000000 },
});

routerPublication.post('/pub/:id', isAuth(), isArtist, upload.single('file'), async (req, res) => {
	const { publication } = req.body;
	var ladate = new Date();
	try {
		if (req.file) {
			const Publication1 = new Publication({
				profileId: req.params.id,
				userId: req.user._id,
				publicationPhoto: `/photos/${req.file.filename}`,
				publication,
				date:
					ladate.getHours() +
					':' +
					ladate.getMinutes() +
					' ' +
					ladate.getDate() +
					'/' +
					(ladate.getMonth() + 1) +
					'/' +
					ladate.getFullYear(),
				usersLiked: [],
			});
			const newPublication = await Publication1.save();
			res.status(200).send({
				publication: newPublication,
				msg: 'publication is saved',
			});
		} else {
			const Publication1 = new Publication({
				profileId: req.params.id,
				userId: req.user._id,
				publicationPhoto: '',
				publication,
				date:
					ladate.getHours() +
					':' +
					ladate.getMinutes() +
					' ' +
					ladate.getDate() +
					'/' +
					(ladate.getMonth() + 1) +
					'/' +
					ladate.getFullYear(),
				usersLiked: [],
			});
			const newPublication = await Publication1.save();
			res.status(200).send({
				publication: newPublication,
				msg: 'publication is saved',
			});
		}
	} catch (error) {
		res.status(400).send({ msg: 'publication can not be saved' });
	}
});

routerPublication.get('/:id', async (req, res) => {
	try {
		const result = await Publication.find({ profileId: req.params.id });
		res.send({ publications: result, msg: 'getting all the publication' });
	} catch (error) {
		res.status(400).send({ msg: 'can not get publication' });
	}
});

routerPublication.delete('/:id', isAuth(), async (req, res) => {
	try {
		const result = await Publication.deleteOne({ _id: req.params.id });
		result.n
			? res.send({ msg: 'the publication has been deleted' })
			: res.send({ msg: 'there is no publication with this id' });
	} catch (error) {
		res.status(400).send({ msg: 'there is no publication with this id' });
	}
});

routerPublication.put('/:id', isAuth(), async (req, res) => {
	try {
		const result = await Publication.updateOne({ _id: req.params.id }, { $push: { usersLiked: req.body } });
		res.send({ msg: 'the publication is updated' });
	} catch (error) {
		res.status(400).send({ msg: 'there is no publication with this id' });
	}
});
routerPublication.put('/dislike/:id', isAuth(), async (req, res) => {
	try {
		const result = await Publication.updateOne(
			{ _id: req.params.id },
			{ $pull: { usersLiked: { idUser: req.body.idUser } } }
		);
		res.send({ msg: 'the publication is updated' });
	} catch (error) {
		res.status(400).send({ msg: 'there is no publication with this id' });
	}
});

routerPublication.put('/comments/:id', isAuth(), async (req, res) => {
	try {
		const result = await Publication.updateOne(
			{ _id: req.params.id },
			{
				$push: {
					comments: {
						comment: req.body.comments,
						userIdCommented: req.user._id,
						userName: req.user.name,
						userLastName: req.user.lastName,
						commentId: req.params.id,
					},
				},
			}
		);
		res.send({ publication: result, msg: 'the publication is updated' });
	} catch (error) {
		res.status(400).send({ msg: 'there is no publication with this id', err: error });
	}
});

routerPublication.put('/comment/:id', isAuth(), async (req, res) => {
	try {
		const result = await Publication.updateOne(
			{ _id: req.params.id },
			{ $pull: { comments: { _id: req.body.commentId } } }
		);
		res.send({ msg: 'the publication is updated' });
	} catch (error) {
		res.status(400).send({ msg: 'there is no publication with this id' });
	}
});

module.exports = routerPublication;
