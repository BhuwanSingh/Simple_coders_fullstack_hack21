const User = require("../models/User");

const secretCode = async (length) => {
  var secret = "";
  var pool = "12345567890";
  for (var i = 0; i < length; i++) {
    secret += pool[Math.floor(Math.random() * 10)];
  }
  return secret;
};

// module.exports = async (req, res) => {
//   try {
//     const newCreated = await User.create({
//       aadhar: req.body.aadhar,
//       age: parseInt(req.body.age),
//       pwd: req.body.pwd ? true : false,
//       secret_code: await secretCode(5),
//       city: req.body.city,
//     });
//     console.log(newCreated);
//     if (req.body.pwd || parseInt(req.body.age) >= 70)
//       res.redirect("/van_system");
//     res.redirect("/registration");
//   } catch (err) {
//     const vaidationErrors = Object.keys(err.errors).map(
//       (key) => err.error[key].message
//     );
//     req.session.validationErrors = validationErrors;
//     return res.redirect("/sign_up");
//   }
// };

module.exports = async (req, res) => {
  age = req.body.age || "0"
  User.create(
    {
      aadhar: req.body.aadhar,
      age: parseInt(age),
      pwd: req.body.pwd ? true : false,
      secret_code: await secretCode(5),
      city: req.body.city,
    },
    (error, user) => {
      if (user) {
        if (user.pwd || user.age >= 70) {
          res.redirect("/van_system");
        }
        res.redirect("/registration");
      }

      console.log(error);
      if (error) {
        const validationErrors = Object.keys(error.errors).map(
          (key) => error.errors[key].message
        );
        // req.session.validationErrors = validationErrors;
        req.flash("validationErrors", validationErrors);
        req.flash("data", req.body);
        return res.redirect("/sign_up");
      }
    }
  );
};
