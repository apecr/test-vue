/* global */

const axios = {
  mockError: false,
  post: (_url, _body) => {
    return new Promise((resolve) => {
      if (axios.mockError) { throw Error() }
      axios.url = _url
      axios.body = _body
      resolve(true)
    })
  },
  setMockError: val => (axios.mockError = val),
  get: (url) => ({ data: { body: 'Hello' } })
}

module.exports = axios
