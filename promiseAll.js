/**
 * promise.all
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error("参数不是一个数组");
    }
    let promisesNum = promises.length;
    let results = []; // promise执行的结果
    let successCounter = 0; // 成功的promise数量
    for (let i = 0; i < promisesNum; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          successCounter++;
          results.push(value);
          if (successCounter === promisesNum) {
            return resolve(results);
          }
        },
        (error) => { // 如果有一个出错了 直接reject
          reject(error);
        }
      );
    }
  });
}
