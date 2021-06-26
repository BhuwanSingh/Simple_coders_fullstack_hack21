const User = require("./../models/User");
const Center = require("./../models/center");
const Book = require("../models/book")

module.exports = async (req, res) => {
  console.log(req.session.userId);
  const user = await User.findById(req.session.userId);
  const center = await Center.findById(req.body.slots);

  const book = await Book.create( 
    
  )

  res.render('user_profile', { user })
}
