const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const cwd = process.cwd()
const tsConfig = require('./tsconfig.json')

// 进行gulp脚本编译
gulp.task('compileTs', (next) => {
  let configPath = path.join(cwd, `tsconfig.json`)
  if (fs.existsSync(configPath)) {
    try {
      let configObj = tsConfig
      if (configObj && configObj.compilerOptions && configObj.compilerOptions.outDir === 'dist') {
        console.log(`开始编译ts文件`)
        next()
      } else {
        console.log(`迁移目录不匹配`)
        next()
      }
    } catch (e) {
      console.log(`tsConfig文件解析出错: ${e}`)
      console.log(e)
      next()
    }
  } else {
    next()
  }
})
