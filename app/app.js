const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
  console.log('Url: ', ctx.url)

  await next()
})

router.get('*', async ctx => {
  ctx.body = 'Hello Nodejs Debug'
})

app.use(router.routes())

app.listen(3000)
console.log('listening on port 3000')
