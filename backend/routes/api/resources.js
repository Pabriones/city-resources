const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Resources = require('../../models/resources');

// @route POST api/resources
// @desc Test route
// @acess Public
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('category', 'Category is required').not().isEmpty(),
		check('phone', 'Phone is required').not().isEmpty(),
        check('address', 'Address is required').not().isEmpty(),
        check('email', 'Please include a valid email').not().isEmpty(),
		check('operationHours', 'Operation hours are required').not().isEmpty(),
		check('description', 'Description is required').not().isEmpty()
			
	
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name,category, phone, address, email,operationHours, description } = req.body;

		try {
			// See if users exists
			let resources = await Resources.findOne({ name });
			if (resources) {
				return res.status(400).json({ errors: [ { msg: 'Resources already exists' } ] });
			}

			

			resources = new Resources({ name,category, phone, address, email, operationHours, description });

            
			await resources.save();
            res.send('Resource saved');
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
