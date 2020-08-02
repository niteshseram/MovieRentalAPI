const winston = require("winston");
const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect("mongodb://localhost:27017/vidly", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => winston.info("Connected to MongoDB..."));
};
