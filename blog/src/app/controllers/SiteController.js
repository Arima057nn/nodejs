const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongooes");

class SiteController {
  // [GET] /
  index(req, res, next) {
    // res.render("home");
    // ? Course.find({}, function (err, courses) {
    // ?  if (!err) res.json(courses);
    // ?  else res.status(400).json({ error: "ERROR !!!" });
    // ? });

    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      .catch(next);
  }
  // [GET] /search

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController(); // Tạo ra 1 đối tượng mới từ class NewsController
