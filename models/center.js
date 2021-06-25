const mongoose = require('mongoose')
const Schema = mongoose.Schema

const walking = new Schema({
  name: String,
  pin: Number,
  slots: Number,
  address: String,
  paid_free: String,
  age: String,
  vaccine: String,
})

const Center = mongoose.model('Center', walking)
module.exports = Center
