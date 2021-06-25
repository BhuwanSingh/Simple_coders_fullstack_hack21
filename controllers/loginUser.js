const User = require("../models/User");
module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  User.findOne({ aadhar }, (error, user) => {
    if (user) {
      if (user.secret_code === secret_code) {
        //TO ADD SESSION VARIABLES
        // req.sessions.userId = user._id;
        console.log("User logged in:", aadhar);
        // page for redirection to be redirected to be after get request.
        res.redirect("/");
      } else {
        res.redirect("/login");
      }
    } else {
    }
  });
};
