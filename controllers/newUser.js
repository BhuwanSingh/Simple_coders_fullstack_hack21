const User = require("../models/User");

module.exports = (req, res) => {
  console.log(req.body);
  User.create(
    { ...req.body, secret_code: Math.floor(Math.randon() * 100000) },
    (error, user) => {
      console.log("this is not working");
      if (error) {
        const vaidationErrors = Object.keys(error.errors).map(
          (key) => errors.error[key].message
        );
        req.session.validationErrors = validationErrors;
        return res.redirect("/sign_up");
      }
      if (req.body.age >= 70) {
        return res.redirect("/van_system");
      }
      res.redirect("/registration");
    }
  );
};
