const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booking = new Schema({
  aadhar: String,
  age: Number,
  city: String,
  pwd: Boolean,
  secret_code: String,
  dose: {
    type: Number,
    enum: [0, 1, 2],
    default: 0,
  },
  center_name: String,
  center_address: String,
  token: Number,
});


const Book = mongoose.model("Book", booking);
module.exports = Book;
