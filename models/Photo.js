const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const PhotoSchema = new Schema({
  title: String,
  email: String,
  image: String,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
