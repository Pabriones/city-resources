const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Account = require('../../models/Account');

// @route POST api/account
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
			let account = await Account.findOne({ email });
			if (account) {
				return res.status(400).json({ errors: [ { msg: 'Account already exists' } ] });
			}

			// Get users gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm'
			});

			account = new Account({ firstname, lastname, dateofbirth, email, avatar, password });

			// Encrypt password
			const salt = await bcrypt.genSalt(10);

			account.password = await bcrypt.hash(password, salt); //take the password and create a hash

			await account.save(); //save the password in the database

			// Return jsonwebtoken

			const payload = {
				account: {
					id: account.id
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
