const mongoose = require('mongoose');

const ResourcesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	category: {
		type: String,
		required: true
	},

	phone: {
		type: String,
		required: true
	},
    address: {
		type: String,
		required: true
	},

	latitude: {
		type: String,
		required: true
	},

	longitude: {
		type: String,
		required: true
	},

	website: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		
	},

    operationHours: {
		type: String,
		required: true
	},
	
    description: {
		type: String,
		required: true
	},
	
});

module.exports = Resources = mongoose.model('resources', ResourcesSchema);
