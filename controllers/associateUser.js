const User = require("./../models/User");
const Center = require("./../models/center");

module.exports = async (req, res) => {
  console.log(req.session.userId);
  const user = await User.findById(req.session.userId);
  const center = await Center.findById(req.body.slots);

  res.render('user_profile', { user })
}
