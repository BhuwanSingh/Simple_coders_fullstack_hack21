var axios = require('axios')

const callAPI = async (data) => {
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
