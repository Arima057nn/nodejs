const mongoose = require("mongoose");

const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Me = new Schema(
  {},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Me", Me);
