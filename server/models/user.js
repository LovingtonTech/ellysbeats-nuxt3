const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	userPhone: { type: String, required: true },
	userEmail: {
		type: String,
		required: true,
		unique: true,
		match:
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	},
	userPassword: { type: String, required: true },
	userType: { type: String, default: "User" },
});
module.exports = mongoose.model("User", userSchema);
