const User = require('./../models/User')
const Van = require('./../models/vans')
const Book = require('../models/book')

module.exports = async (req, res) => {
  if (req.session.userId == undefined) {
    return res.redirect('/sign_up')
  } else {
    console.log(req.session.userId)
    const user = await User.findById(req.session.userId)
    const van = await Van.findById(req.body.slots)

    const book = await Book.findOne({ user_id: user._id })
    if (book) {
      var cert = ''
      res.render('user_profile', { book, c_token: van.current_token, cert })
    } else {
      const num = await Book.countDocuments({ center_id: van._id })
      console.log(num)

      const book = await Book.create({
        aadhar: user.aadhar,
        age: user.age,
        city: user.city,
        user_id: user._id,
        pwd: user.pwd,
        secret_code: user.secret_code,
        dose: user.dose + 1,
        center_id: van._id,
        center_name: van.name,
        center_address: van.address,
        token: num + 1,
        vaccine: van.vaccine,
      })
      var cert = ''
      const vanOld = await Van.findByIdAndUpdate(van._id, {
        slots: van.slots - 1,
      })
      res.render('user_profile', { book, c_token: van.current_token, cert })
    }
  }
}
