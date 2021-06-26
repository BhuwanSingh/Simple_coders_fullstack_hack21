const User = require('./../models/User')
const Center = require('./../models/center')

module.exports = async (req, res) => {
  console.log(req.session.userId)
  const user = await User.findById(req.session.userId)
  const center = await Center.findById(req.body.slots)

  const userUpdated = await User.findByIdAndUpdate(req.session.userId, {
    center_name: center.name,
    center_address: center.address,
  })
  console.log(userUpdated)
  res.render('user_profile', { user })
}
