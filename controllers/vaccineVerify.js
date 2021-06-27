const Book = require("../models/book");

module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  Book.findOne({ aadhar }, (error, user) => {
    if (Book) {
      console.log(secret_code);
      console.log(user.secret_code);
      if (user.secret_code == secret_code) {
        console.log("this is verified");
        
        res.redirect("/adminPage/userverified");
      } else {
        res.redirect("/adminPage/usernotverified");
      }
    } else {
      res.redirect("/adminPage/usernotverified");
    }
  });
};
