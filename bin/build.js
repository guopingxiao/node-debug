const shelljs = require('shelljs')
const argv = require('yargs').argv
const Analyzer = require('@dp/dependency-analyzer')
let env = shelljs.env['MINA']
let mode = shelljs.env['MODE']

const cleanDist = function () {
  console.log(env, mode)
  if (mode === 'production') {
    shelljs.exec(`rm -rf dist`)
  }
}

try {
  // 配置
  Analyzer.setConfig({
    fileType: 'js'
  })

  // 开始分析
  cleanDist()
  // Analyzer.analysis()
} catch (e) {
  cleanDist()
  console.log(`Analyzer error`, e)
}
