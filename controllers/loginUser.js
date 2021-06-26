const Book = require("../models/book");

module.exports = async (req, res) => {
  const { aadhar, secret_code } = req.body;
  const book = await Book.findOne({ aadhar });

  if (book) {
    if (book.secret_code == secret_code) {
      console.log("user logged in");
      res.render("user_profile", { book });
    }
  } else {
    // res.redirect("/login");
    res.render("user_login" , {errors : "Please enter the Aadhar and secret code you've registered your vaccine with."})
  }
};
