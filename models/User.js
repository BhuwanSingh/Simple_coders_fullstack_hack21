const mongoose = require('mongoose')
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator')

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
        return age > 17 && age < 200
      },
      'Please enter valid age',
    ],
  },
  city: {
    type: String,
    required: [true, 'Please enter city'],
  },
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
  center_name: String,
  center_address: String,
  token: Number,
})

person.plugin(uniqueValidator, { message: 'Please enter unique {PATH}' })
person.pre('save', (next) => {
  next()
})

const User = mongoose.model('User', person)

module.exports = User
