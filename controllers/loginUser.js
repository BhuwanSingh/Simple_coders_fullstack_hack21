const Book = require("../models/book");
const Center = require("../models/center")

module.exports = async (req, res) => {
  const { aadhar, secret_code } = req.body;
  const book = await Book.findOne({ aadhar });

  if (book) {
    if (book.secret_code == secret_code) {
      const center = await Center.findById(book.center_id);

      console.log("user logged in");
      res.render("user_profile", { book , c_token: center.current_token});
    }
  } else {
    // res.redirect("/login");
    res.render("user_login" , {errors : "Please enter the Aadhar and secret code you've registered your vaccine with."})
  }
};
