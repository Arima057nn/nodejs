const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongooes");
const { mongooseToObject } = require("../../util/mongooes");

class CourseController {
  // [GET] /search

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // res.json(course);
        res.render("courses/show", { course: mongooseToObject(course) });
        // ?res.render("courses/show", course);
      })
      .catch(next);
  }
  //? res.send("Course Detail - " + req.params.slug);

  // [GET] /create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /store

  store(req, res, next) {
    // res.render("courses/create");
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);

    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
    // res.json(req.body);
    // res.send("Saved !!!");
  }

  // [GET] _id/edit
  edit(req, res, next) {
    Course.findById(req.params._id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    // res.json(req.body);
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController(); // Tạo ra 1 đối tượng mới từ class NewsController
