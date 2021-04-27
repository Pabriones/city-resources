const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	account: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'account'
	},
	bio: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	skills: {
		type: [ String ],
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
