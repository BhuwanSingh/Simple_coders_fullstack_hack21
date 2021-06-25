const admin = require("../models/admin");
module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  admin.findOne({ aadhar }, (error, admin) => {
    console.log(admin.secret_code);
    console.log(secret_code);
    if (admin) {
      if (admin.secret_code == secret_code) {
        req.session.userID = admin._id;
        console.log("admin logged in:", aadhar);
        res.redirect("/adminPage/verified");
      }
    } else {
      redirect("/");
    }
    console.log(error);
  });
};
