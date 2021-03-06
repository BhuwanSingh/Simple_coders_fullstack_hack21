const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const van_system = new Schema({
  name: String,
  pin: Number,
  slots: Number,
  address: String,
  paid_free: String,
  age: String,
  vaccine: String,
  current_token:{
    type: Number,
    default: 0
  }
});

const Van = mongoose.model("Van", van_system);
module.exports = Van;
