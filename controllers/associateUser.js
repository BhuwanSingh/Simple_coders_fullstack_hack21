const User = require('./../models/User')
const Center = require('./../models/center')
const Book = require('../models/book')

module.exports = async (req, res) => {
  console.log(req.session.userId)
  const user = await User.findById(req.session.userId)
  const center = await Center.findById(req.body.slots)

  const num = await Book.countDocuments({ center_id: center._id })
  console.log(num)

  const book = await Book.create({
    aadhar: user.aadhar,
    age: user.age,
    city: user.city,
    user_id: user._id,
    pwd: user.pwd,
    secret_code: user.secret_code,
    dose: user.dose + 1,
    center_id: center._id,
    center_name: center.name,
    center_address: center.address,
    token: num + 1,
  })

  res.render('user_profile', { book })
}
