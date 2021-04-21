const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Account = require('../../models/Account');
const { check, validationResult } = require('express-validator');

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
			check('status', 'Status is required').not().isEmpty(),
			check('skills', 'Skills are required').not().isEmpty()
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
	}
);

module.exports = router;
