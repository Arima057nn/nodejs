const { default: mongoose } = require("mongoose");

module.exports = {
  // Trả lại 1 hoặc nhiều
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
  },

  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
