const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Account = require('../../models/Account');
const { check, validationResult } = require('express-validator');
const { restart } = require('nodemon');

// @route GET api/profile/me
// @desc  Get current users profile
// @acess Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ account: req.account.id }).populate('account', [
			'firstname',
			'avatar'
		]);
		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}
		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/profile
// @desc  Create or update a user profile
// @acess Private
router.post(
	'/',
	[
		auth,
		[
			check('bio', 'Bio is required').not().isEmpty(),
			check('status', 'Status is required').not().isEmpty(),
			check('skills', 'Skills are required').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { bio, status, skills } = req.body;

		// Build profile object
		const profileFields = {};
		profileFields.account = req.account.id;
		if (bio) profileFields.bio = bio;
		if (status) profileFields.status = status;
		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim()); // split turns string into an array
		}

		try {
			let profile = await Profile.findOne({ account: req.account.id });
			if (profile) {
				//update
				profile = await Profile.findOneAndUpdate(
					{ account: req.account.id },
					{ $set: profileFields },
					{ new: true }
				);

				return res.json(profile);
			}
			// Create
			profile = new Profile(profileFields);

			await profile.save();
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route 	GET api/profile
//@des 		Get all profiles
//@access Public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('account', [ 'firstname', 'avatar' ]);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route 	GET api/profile/account/:account_id
//@des 		Get profile by account ID
//@access Public

router.get('/account/:account_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({ account: req.params.account_id }).populate('account', [
			'firstname',
			'avatar'
		]);

		if (!profile) return res.status(400).json({ msg: 'Profile not found' });

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

//@route 	DELETE api/profile
//@des 		Delete profiles, user and post
//@access Private

router.delete('/', auth, async (req, res) => {
	try {
		//todo - remove users posts

		//remove profile
		await Profile.findOneAndRemove({ account: req.account.id });
		//remove account/user
		await Account.findOneAndRemove({ _id: req.account.id });
		res.json({ msg: 'Account Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
