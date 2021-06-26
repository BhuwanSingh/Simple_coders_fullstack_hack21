const jwt = require('jsonwebtoken')

console.log(
  jwt.sign(
    {
      iss: 'b216a1e64e3ac34a5aacde1cf2c9cefbadb503dbabde5d30d539b83004d8bbdb',
      sub: 'ahsijain0709@gmail.com',
    },
    '2105a6db3664370bdc5b54c771c0afda41c202a89c6ada48738593e32bf319b9',
    {
      expiresIn: '5d',
    }
  )
)
