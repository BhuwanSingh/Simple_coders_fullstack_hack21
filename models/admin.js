const mongoose = require('mongoose')
const Schema = mongoose.Schema

const worker = new Schema({
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  secret_code: {
    type: String,
  },
})

const Admin = mongoose.model('Admin', worker)
module.exports = Admin
