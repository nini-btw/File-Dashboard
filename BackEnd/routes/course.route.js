const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");

router.route("/").get(courseController.getAllCourses);

module.exports = router;
