var http = require('https')
var fs = require('fs')

var options = {
  method: 'POST',
  hostname: 'us1.pdfgeneratorapi.com',
  port: null,
  path: '/api/v3/templates/266018/output?name=temp&format=pdf&output=url',
  headers: {
    'content-type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiMjE2YTFlNjRlM2FjMzRhNWFhY2RlMWNmMmM5Y2VmYmFkYjUwM2RiYWJkZTVkMzBkNTM5YjgzMDA0ZDhiYmRiIiwic3ViIjoiYWhzaWphaW4wNzA5QGdtYWlsLmNvbSIsImlhdCI6MTYyNDczMjMxMiwiZXhwIjoxNjI1MTY0MzEyfQ.tpMTDXr2kq9wFsRMU0iQiUWRRjlK0nUcmbhAajlXxbI',
  },
}

var req = http.request(options, function (res) {
  var chunks = []

  res.on('data', function (chunk) {
    chunks.push(chunk)
  })

  res.on('end', function () {
    var body = Buffer.concat(chunks)
    fs.writeFile('myjsonfile.json', body, (err) => {
      if (err) return console.log(err)
      console.log('saved')
    })
  })
})

req.write(
  JSON.stringify({
    aadhar: '12423',
    age: 23,
    city: '12434',
    center_name: 'absd',
    center_address: 'sdfdsdf',
    vaccine: 'covishield',
    dose: 2,
  })
)
req.end()
