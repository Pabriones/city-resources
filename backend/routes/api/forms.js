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
		check('organisation_name', 'Organization name is required').not().isEmpty(),
		check('form_name', 'Form name is required').not().isEmpty(),
		check('category', 'Category is required').not().isEmpty(),
		check('link', 'Link is required').not().isEmpty()


	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { organisation_name,form_name,category,link } = req.body;

		try {
			// See if users exists
			let forms = await Forms.findOne({link });
			if (forms) {
				return res.status(400).json({ errors: [ { msg: 'Resources already exists' } ] });
			}



			forms = new Forms({ organisation_name,form_name,category,link });


			await forms.save();
			res.send('Resource saved');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;