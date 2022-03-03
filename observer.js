/**
 * 发布订阅 on off emit 内部一个存储中心cache进行事件存储
 */
class Observer {
  caches = {};
  on(eventName, fn) {
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn); // 把注册的函数push进数组
  }
  once(eventName, fn) {
    // 只执行一次，把函数包一层，执行完成后调用off
    const wrapFn = (...args) => {
      fn(...args);
      this.off(eventName);
    };
    this.on(eventName, wrapFn);
  }

  off(eventName) {
    this.caches[eventName] = [];
  }

  emit(eventName, val) {
    this.caches[eventName].forEach((fn) => {
      fn(val);
    });
  }
}
const observer = new Observer();

observer.on("myevent", (val) => {
  console.log("myevent:", val);
});
observer.on("myevent", (val) => {
  console.log("myevent111:", val);
});
observer.once("myevent2", (val) => {
  console.log("myevent2:", val);
});

observer.emit("myevent2", "maheng");
observer.emit("myevent2", "maheng");
observer.emit("myevent2", "maheng");
