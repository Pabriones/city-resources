const mongoose = require('mongoose');

const FormsSchema = new mongoose.Schema({
	name: {
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
