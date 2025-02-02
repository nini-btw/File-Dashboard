const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/").get(userController.getAllUsers);
router.route("/login").post(userController.login);
router.route("/register").post(userController.register);

module.exports = router;
