var axios = require('axios')

const callAPI = async (data) => {
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

  // const data = {
  //   aadhar: '12423',
  //   age: 23,
  //   city: '12434',
  //   center_name: 'absd',
  //   center_address: 'sdfdsdf',
  //   vaccine: 'covishield',
  //   dose: 2,
  // }

  const all = await axios.post(
    'https://us1.pdfgeneratorapi.com/api/v3/templates/266018/output?name=temp&format=pdf&output=url',
    data,
    { headers: options.headers }
  )

  return all.data
}

module.exports = callAPI
