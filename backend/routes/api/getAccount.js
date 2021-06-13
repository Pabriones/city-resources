const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Account = require('../../models/account');

// @route POST api/account
// @desc Test route
// @acess Public
router.post('/', auth, async (req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.account.id,{firstname:req.body.firstname,lastname:req.body.lastname})
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
