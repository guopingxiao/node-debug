const Debug = require('debug')('Compute')

function plus (a, b) {
  let result = a + b
  Debug('plus:', `${a}+${b}=${result}`)
  return result
}

module.exports = plus
