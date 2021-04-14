const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Account = require('../../models/Account');

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

module.exports = router;
