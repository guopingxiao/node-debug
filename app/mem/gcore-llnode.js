//  由于全局变量引起的内存泄漏

const leaks = []

class LeakingClass {
  constructor (name, age) {
    this.name = name || Math.random().toString(20)
    this.age = age || Math.floor(Math.random() * 100)
  }
}

setInterval(() => {
  for (let i = 0; i < 100; i++) {
    leaks.push(new LeakingClass())
  }
  console.warn('Leaks: %d', leaks.length)
}, 1000)

// 1. 开启 Core Dump : ulimit -c ulimit -c unlimited
// 2. 运行程序 node app/mem/gc
// 3. dunp core文件 : sh gcore.sh
// 4. lldb加载core文件， v8 分析  lldb -c ./core.2763
// v8 findjsobjects --> v8 findjsinstances --> v8 i --> v8 findrefs
