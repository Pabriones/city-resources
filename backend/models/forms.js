const mongoose = require('mongoose');

const FormsSchema = new mongoose.Schema({
	organisation_name: {
		type: String,
		required: true
	},

    form_name: {
		type: String,
		required: true
	},

	category: {
		type: String,
		required: true
	},

	link: {
		type: String,
		required: true
	},
  
	
});

module.exports = Forms = mongoose.model('forms', FormsSchema);
