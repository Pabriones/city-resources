const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Account = require('../../models/forms');

// @route POST api/forms
// @desc Test route
// @acess Public
router.post(
	'/',
	[
		check('firstname', 'Firstname is required').not().isEmpty(),
		check('lastname', 'Lastname is required').not().isEmpty(),
		check('dateofbirth', 'Please enter a date of birth').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 7 or more characters').isLength({
			min: 7
		})
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { firstname, lastname, dateofbirth, email, password } = req.body;

		try {
			// See if users exists
			let forms = await Forms.findOne({ email });
			if (forms) {
				return res.status(400).json({ errors: [ { msg: 'Account already exists' } ] });
			}

			// Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			forms = new Forms({ firstname, lastname, dateofbirth, email, avatar, password });

			

			await forms.save(); //save the password in the database

			// Return jsonwebtoken

			const payload = {
				account: {
					id: forms.id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;

