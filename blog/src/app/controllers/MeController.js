const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongooes");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("me/stored-courses", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  storedNews(req, res, next) {
    // res.send("List news");
    res.render("me/stored-news");
  }
}

module.exports = new MeController(); // Tạo ra 1 đối tượng mới từ class NewsController
