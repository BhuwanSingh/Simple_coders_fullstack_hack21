module.exports = (req, res) => {
  res.render("sign_up", {
    error: flash("validaionError"),
  });
};
