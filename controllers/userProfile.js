module.exports = (req, res) => {
  if(req.session.userId == undefined ){
    res.redirect("/")
  } else {
    res.render('user_profile')
  }
}
