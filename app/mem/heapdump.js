// 由于闭包引起的内存泄漏

const heapdump = require('heapdump')

let leakObject = null

setInterval(function testMemoryLeak () {
  const originLeakObject = leakObject

  const unused = function () {
    if (originLeakObject) {
      console.log('originLeakObject')
    }
  }

  leakObject = {
    leakStr: new Array(1e7).join('*'),
    leakMethod: function () {
      console.log('leakMessage')
    }
  }
}, 1000)

// node app
// kill -USR2 `pgrep -n node`
