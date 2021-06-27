const Book = require("../models/book");
const Center = require("../models/center");

module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  Book.findOne({ aadhar }, (error, user) => {
    if (user) {
      console.log(secret_code);
      console.log(user.secret_code);
      if (user.secret_code == secret_code) {
        console.log("this is verified");
        Center.findByIdAndUpdate(user.center_id, {
          current_token: user.token,
        } , (error , center) => {
          res.redirect("/adminPage/userverified");
        });
      } else {
        res.redirect("/adminPage/usernotverified");
      }
    } else {
      res.redirect("/adminPage/usernotverified");
    }
  });
};
