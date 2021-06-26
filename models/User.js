const mongoose = require('mongoose')
const Schema = mongoose.Schema

const person = new Schema({
  aadhar: {
    type: String,
    required: [true, 'Please enter Aadhar'],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, 'Please enter age'],
    validate: [
      function (age) {
        return age > 0 && age < 200
      },
      'Please Enter valid age',
    ],
  },
  city: String,
  pwd: {
    type: Boolean,
    default: false,
  },
  secret_code: {
    type: String,
  },
  dose: {
    type: Number,
    enum: [0, 1, 2],
    default: 0,
  },
})

const User = mongoose.model('User', person)

module.exports = User
