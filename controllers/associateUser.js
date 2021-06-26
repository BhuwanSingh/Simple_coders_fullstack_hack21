const User = require("./../models/User");
const Center = require("./../models/center");

module.exports = async (req, res) => {
  console.log(req.session.userId);
  const user = await User.findById(req.session.userId);
  const center = await Center.findById(req.body.slots);

  cost disUser.findByIdAndUpdate(user_id, { name: "Gourav" }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated User : ", docs);
    }
  });

  const userUpdated = await User.findByIdAndUpdate(req.session.userId);
  res.render("user_profile", { user });
};
