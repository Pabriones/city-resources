const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Forms = require('../../models/forms');

// @route POST api/forms
// @desc Test route
// @acess Public
router.post(
    '/',
    [
        // check('organisation_name', 'Organization name is required').not().isEmpty(),
        // check('form_name', 'Form name is required').not().isEmpty(),
        // check('category', 'Category is required').not().isEmpty(),
        // check('link', 'Link is required').not().isEmpty()


    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { category} = req.body;

        try {

            if(category.length != 0) {
                var response  = await Forms.find({'category': {'$in': category}});
            }else{
                var response  = await Forms.find({});
            }
            if (response) {
                return res.status(200).json({ data: response,success:true });
            }else{
                return res.status(400).json({ data: false,success:false });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;