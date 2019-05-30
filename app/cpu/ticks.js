const crypto = require('crypto')
function hash (password) {
  const salt = crypto.randomBytes(128).toString('base64')
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512')
  return hash
}

console.time('pbkdf2Sync')
for (let i = 0; i < 100; i++) {
  hash('random_password')
}
console.timeEnd('pbkdf2Sync')

// node --prof ticks  # 生成v8log日志，默认是关闭的
// node --prof-process isolate-0x103000000-v8.log #处理v8log日志
