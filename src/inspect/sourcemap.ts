require('source-map-support').install()
function sayHello(name: string): any {
  console.log(`Hello ${name}`)
  throw new Error('error!!!')
}

sayHello('World')