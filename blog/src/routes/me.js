const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

// [GET] me/stored/courses
router.get("/stored/courses", meController.storedCourses);

// [GET] me/stored/news
router.get("/stored/news", meController.storedNews);

module.exports = router;
