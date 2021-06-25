const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const person = new Schema({
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  city: String,
  pwd: {
    type: Boolean,
    default: false,
  },
  secret_code: {
    type: String,
  },
});

const User = mongoose.model("User", person);

module.exports = User;
