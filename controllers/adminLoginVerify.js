const Admin = require('../models/admin')

module.exports = async (req, res) => {
  const { aadhar, secret_code } = req.body

  const worker = await Admin.findOne({ aadhar })
  if (worker && aadhar != null && secret_code != null) {
    if (worker.secret_code == secret_code) {
      // req.session.userID = admin._id;
      console.log('admin logged in:', aadhar)
      res.redirect('/adminPage/verified')
    }
  } else {
    res.render('admin_login', {
      message: 'Enter a valid Health Worker ID and Government Provided Code.',
    })
  }
}
