const Debug = require('debug')('Compute')

function minus (a, b) {
  let result = a - b
  Debug('minus:', `${a}-${b}=${result}`)
  return result
}

module.exports = minus
