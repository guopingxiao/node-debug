const Log = require('debug')('log')
const Warn = require('debug')('warn')
const errorNormalLog = require('debug')('error:normal')
const errorHighLog = require('debug')('error:high')

module.exports = function log () {
  setInterval(() => {
    const value = Math.random().toFixed(2)
    switch (true) {
      case value < 0.5: Log(value); break
      case value >= 0.5 && value < 0.7: Warn(value); break
      case value >= 0.7 && value < 0.9: errorNormalLog(value); break
      case value >= 0.9: errorHighLog(value); break
      default: Log(value)
    }
  }, 1000)
}
