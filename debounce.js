/**
 * 防抖： 在事件触发n秒后再执行回调，如果在这n秒内再次触发，则重新开始计时
 * 应用于点击按钮提交、输入框联想等
 */
/**
 * 基础版本
 */

function debounce(fn, wait) {
  let timeout = null;
  return function (...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

/**
 * 立即执行版本，先立即执行一次
 */

function debounce1(fn, wait, immediate) {
  const args = arguments;
  let timeout = null;
  return function () {
    const context = this;
    timeout && clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        // 这里是一个类似开关的作用，设置一个延时器,在这段时间内timeout一直是true，不能执行函数，等到过了wait时间，timeout=null 才能再执行函数
        timeout = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    }
  };
}

/**
 * 节流
 * 原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 * 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
 * 缩放场景：监控浏览器resize
 *
 */
function throttle(fn, wait) {
  // 用时间戳实现
  let previous = 0;
  let context, args;
  return function () {
    context = this;
    args = arguments;
    let now = +new Date();
    if (now - previous > wait) {
      //如果两次时间超过wait，则可以执行一次
      fn.apply(context, args);
      previous = now; // 更新previous的值
    }
  };
}

function throttle1(fn, wait) {
  // 用定时器实现
  let timeout = null;
  let context, args;
  return function () {
    context = this;
    args = arguments;
    if (!timeout) {
      fn.apply(context, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
}
function test() {
  console.log(123);
}
let a = throttle1(test, 2000);
a();
setTimeout(() => {
  a();
}, 3000);
a();
a();
