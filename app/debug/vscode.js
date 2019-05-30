const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
  console.log('Vscode: ', ctx.url)

  await next()
  let result = plus(4, 3)
  console.log(`执行结果为：`, result)
})

router.get('*', async ctx => {
  ctx.body = 'Hello Vscode'
})

app.use(router.routes())

app.listen(3000)
console.log('listening on port 3000')

function plus (a, b) {
  return a + b
}
