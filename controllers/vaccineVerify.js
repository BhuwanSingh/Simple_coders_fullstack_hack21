const User = require("../models/User");

module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  User.findOne({ aadhar }, (error, user) => {
    if (user) {
      console.log(secret_code);
      console.log(user.secret_code);
      if (user.secret_code == secret_code) {
        console.log("this is verified");
        res.redirect("/adminPage/verified");
      }
    }
  });
};
