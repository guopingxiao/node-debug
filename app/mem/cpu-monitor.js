// cpu监控
require('cpu-memory-monitor')({
  cpu: {
    interval: 1000,
    duration: 30000,
    threshold: 60,
    profileDir: '/tmp',
    counter: 3,
    limiter: [5, 'hour']
  }
})

// memory监控
require('cpu-memory-monitor')({
  memory: {
    interval: 1000,
    threshold: '1.2gb',
    profileDir: '/tmp',
    counter: 3,
    limiter: [3, 'hour']
  }
})
