const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");
const allowedTo = require("../middleware/allowedTo");
const userRole = require("../utils/userRole");

router
  .route("/")
  .get(/* verifyToken, allowedTo(userRole.E), */ userController.getAllUsers);
router.route("/login").post(userController.login);
router.route("/register").post(userController.register);

module.exports = router;
