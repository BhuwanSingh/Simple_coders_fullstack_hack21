const User = require('../models/User')

const secretCode = async (length) => {
  var secret = ''
  var pool = '12345567890'
  for (var i = 0; i < length; i++) {
    secret += pool[Math.floor(Math.random() * 10)]
  }
  return secret
}

module.exports = async (req, res) => {
  try {
    const newCreated = await User.create({
      aadhar: req.body.aadhar,
      age: parseInt(req.body.age),
      pwd: req.body.pwd ? true : false,
      secret_code: await secretCode(5),
      city: req.body.city,
    })
    console.log(newCreated)
    if(req.body.pwd || parseInt(req.body.age)>=70)
    res.redirect('/van_system')
    res.redirect('/registration')
  } catch (err) {
    console.log(err)
    res.redirect('/notfound')
  }
  //   try {
  //     await User.create(arr)
  //     console.log('Data Added')
  //     //res.redirect('/registration')
  //   } catch (err) {
  //     console.log(err)
  //     res.redirect('notfound')
  //   }
  //   User.create(newUser, (error, user) => {
  //     console.log('this is not working')
  //     if (error) {
  //       const vaidationErrors = Object.keys(error.errors).map(
  //         (key) => errors.error[key].message
  //       )
  //       req.session.validationErrors = validationErrors
  //       return res.redirect('/sign_up')
  //     }
  //     if (req.body.age >= 70) {
  //       return res.redirect('/van_system')
  //     }
  //     res.redirect('/registration')
  //   })
}
