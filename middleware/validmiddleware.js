module.exports = (req, res, next) => {
  if (!req.session.userId) {
    console.log("the user id not loggd in");
    res.redirect("/user/login");
  }
  next();
};
