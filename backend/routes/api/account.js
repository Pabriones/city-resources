const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route POST api/account
// @desc Test route
// @acess Public
router.post(
	'/',
	[
		check('firstname', 'Firstname is required').not().isEmpty(),
		check('lastname', 'Lastname is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 7 or more characters').isLength({
			min: 7
		})
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send('User route');
	}
);

module.exports = router;
