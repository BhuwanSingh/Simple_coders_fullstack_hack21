module.exports = (req, res) => {
  res.render("sign_up", {
    // errors: req.session.validationErrors,
    errors: req.flash("validationErrors")
  });
};
