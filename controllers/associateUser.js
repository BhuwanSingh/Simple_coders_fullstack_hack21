const User = require('./../models/User')

module.exports = async (req, res) => {
  console.log(req.session.userId)
  const user = await User.findById(req.session.userId)
  res.render('user_profile', { user })
}
