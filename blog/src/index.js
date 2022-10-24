const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();

const port = 3000;
// Xử lí static file
app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./resources/views"));

app.get("/", function (req, res) {
  res.render("home");
  // res.render("main");
});

app.get("/news", function (req, res) {
  res.render("news");
  // res.render("main");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
