const User = require("../models/User");
module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  User.findOne({ aadhar }, (error, user) => {
    console.log(user.secret_code);
    console.log(secret_code);
    if (user) {
      if (user.secret_code == secret_code) {
        req.session.userID = user._id;
        console.log("User logged in:", aadhar);
        // res.redirect("/user/profile");
        res.render("user_profile" , { user });
      }
    } else {
      redirect("/login");
    }
  });
};
