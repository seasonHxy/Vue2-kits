class Dep {
    constructor () {
      // 存储所有的观察者
      this.subs = []
    }
    // 添加观察者
    addSub (sub) {
      if (sub && sub.update) {
        this.subs.push(sub)
      }
    }
    // 派发更新
    notify () {
      this.subs.forEach(sub => {
        sub.update()
      })
    }
  }