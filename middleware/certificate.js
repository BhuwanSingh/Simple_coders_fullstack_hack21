var http = require('https')
var fs = require('fs')
const fun = function(data) {
  var options = {
    method: 'POST',
    hostname: 'us1.pdfgeneratorapi.com',
    port: null,
    path: '/api/v3/templates/266018/output?name=temp&format=pdf&output=url',
    headers: {
      'content-type': 'application/json',
      authorization: process.env.BEARER,
    },
  }
  let responseUrl = ''
  var req = http.request(options, function (res) {
    var chunks = []

    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', function () {
      var body = Buffer.concat(chunks)
      responseUrl = body.response
      // fs.writeFile('myjsonfile.json', body, (err) => {
      //   if (err) return console.log(err)
      //   console.log('saved')
      // })
    })
  })
  req.write(
    JSON.stringify({
      aadhar: data.aadhar,
      age: data.age,
      city: data.city,
      center_name: data.center_name,
      center_address: data.center_address,
      vaccine: data.vaccine,
      dose: data.dose,
    })
  )
  return req.end(() => responseUrl)
}
module.exports = fun;