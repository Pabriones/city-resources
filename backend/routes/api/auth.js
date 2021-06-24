const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Account = require('../../models/account');

// @route GET api/auth
// @desc Test route
// @acess Public
router.get('/', auth, async (req, res) => {
	try {
		const account = await Account.findById(req.account.id).select('-password');
		res.json(account);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/account
// @desc  Authenticate user and get token
// @acess Public
router.post(
	'/',
	[ check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists() ],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// See if users exists
			let account = await Account.findOne({ email });

			if (!account) {
				return res.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });
			}

			const isMatch = await bcrypt.compare(password, account.password);

			if (!isMatch) {
				return res.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });
			}

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
