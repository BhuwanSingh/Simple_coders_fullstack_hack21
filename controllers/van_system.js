const Vans = require("../models/vans");

module.exports = async (req, res) => {
  const van_data = await Vans.find({});
  res.render("van_system", van_data);
};
