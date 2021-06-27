const Book = require('../models/book')
const Center = require('../models/center')
const callAPI = require('./../middleware/certificate')

module.exports = async (req, res) => {
  const { aadhar, secret_code } = req.body
  const book = await Book.findOne({ aadhar })

  if (book) {
    if (book.secret_code == secret_code) {
      const center = await Center.findById(book.center_id)
      const cert = await callAPI(book)
      console.log('user logged in')
      res.render('user_profile', {
        book,
        c_token: center.current_token,
        cert: cert.response,
      })
    }
  } else {
    // res.redirect("/login");
    res.render('user_login', {
      errors:
        "Please enter the Aadhar and secret code you've registered your vaccine with.",
    })
  }
}
