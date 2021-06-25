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
  const newUser = { ...req.body }
  const code = await secretCode(5)
  newUser.age = parseInt(newUser.age)
  
  newUser.secret_code = code
  console.log(newUser)
  arr = [newUser]
  console.log(arr)
  try {
    const newCreated = await User.create(arr)
    console.log(newCreated)
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
