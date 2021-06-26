module.exports = (req, res) => {
  console.log(req.session.userId);
  res.redirect("/");
};
