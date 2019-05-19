
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
