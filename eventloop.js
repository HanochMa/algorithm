/**
 * 宏任务和微任务
 * 每执行完 一个 宏任务后 清空当前微任务
 */

console.log("start");

setTimeout(() => {
  console.log(1);
  new Promise((resolve, reject) => {
    console.log(2);
    resolve()
  }).then(() => {
    console.log(3);
  });
}, 0);

setTimeout(() => {
  console.log(4);
}, 0);

new Promise((resolve, reject) => {
  console.log(5);
  resolve()
}).then(() => {
  console.log(6);
});

console.log("end");

// start 5 end 6 1 2 3 4
