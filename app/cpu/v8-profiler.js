const fs = require('fs')
const crypto = require('crypto')
const Bluebird = require('bluebird')
const profiler = require('v8-profiler')
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/encrypt', async function encryptRouter (ctx) {
  const password = ctx.query.password || 'test'
  const salt = crypto.randomBytes(128).toString('base64')
  const encryptedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
  ctx.body = encryptedPassword
})

router.get('/cpuprofile', async ctx => {
  // Start Profiling
  profiler.startProfiling('CPU profile')
  await Bluebird.delay(30000)
  // Stop Profiling after 30s

  const profile = profiler.stopProfiling()
  profile.export()
    .pipe(fs.createWriteStream(`./app/static/v8-profiler.cpuprofile`))
    .on('finish', () => profile.delete())
  ctx.status = 204
})

app.use(router.routes())
app.listen(3000)
console.log(`v8 listening on port 3000`)

// curl localhost:3000/cpuprofile
// ab -c 20 -n 2000 "localhost:3000/encrypt?password=123456"
