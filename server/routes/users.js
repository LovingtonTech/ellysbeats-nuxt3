const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/user");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Sign up",
	});
	console.log("Sign Up");
});

router.post("/signup", (req, res, next) => {
	User.find({ userEmail: req.body.userEmail }).then((result) => {
		if (result.length != 0) {
			return res.status(401).json({ message: "User exists", result: result });
		} else {
			bcrypt.hash(req.body.userPassword, 10, (error, hash) => {
				if (error) {
					return res.status(500).json(error);
				} else {
					const user = new User({
						_id: mongoose.Types.ObjectId(),
						firstname: req.body.firstname,
						lastname: req.body.lastname,
						userPhone: req.body.userPhone,
						userEmail: req.body.userEmail,
						userPassword: hash,
					});
					user
						.save()
						.then((result) => {
							return res.status(200).json(`Save result: ${result}`);
						})
						.catch((error) => {
							return res.status(422);
						});
				}
			});
			return res.status(200).json(`${result}`);
		}
	});
});

module.exports = router;
