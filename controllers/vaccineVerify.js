module.exports = (req, res) => {
  const { aadhar, secret_code } = req.body;
  User.findOne({ aadhar }, (error, user) => {
    if (user) {
      if (user.secret == secret_code) {
        res.redirect("/adminPage/verified" , { messaage : "person is to be Vaccinated"})
      }
    }
  });
};
