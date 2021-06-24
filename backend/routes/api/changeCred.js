const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Account = require('../../models/account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
// @route POST api/account
// @desc Test route
// @acess Public
router.post('/', auth, async (req, res) => {
	try {
		const { email, oldPassword, newPassword } = req.body;
		let account = await Account.findOne({ email });
		const isMatch = await bcrypt.compare(oldPassword, account.password);
		if (!isMatch) {
			return res.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });
		} else {
			// Encrypt password
			const salt = await bcrypt.genSalt(10);
			const HashedPassword = await bcrypt.hash(newPassword, salt);
			const account = await Account.findByIdAndUpdate(req.account.id, { password: HashedPassword });
			return res.status(200).json({ msg: 'Password updated' });
		}

		if (!account) {
			return res.status(400).json({ msg: 'There is no user' });
		}
		res.json(account);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
