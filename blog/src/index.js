const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const route = require("./routes");
const db = require("./config/db");
// Connect to DB
db.connect();

// Xử lí static file
app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   express
//     .urlencoded
//     extended: true
//     ()
// );

app.use(express.json());
app.use(methodOverride("_method"));
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
