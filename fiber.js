/**
 * 斐波那契数列
 */

function fib(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  else return fib(n - 1) + fib(n - 2);
}

/**
 * 数组优化版本
 */

function fib1(n) {
  let list = [];
  list[0] = 0;
  list[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list[n];
}

/**
 * 递归优化版本
 */

function fib2(n) {
  let list = [0, 1, 1];
  function _fib2(n) {
    if (list[n]) return list[n];
    list[n] = _fib2(n - 1) + _fib2(n - 2);
    return list[n];
  }
  return _fib2(n);
}

/**
 * 递归优化2
 */

function fib3(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  function _fib3(n, a, b) {
    if (n === 0) return a;
    return _fib3(n - 1, b, a + b);
  }
  return _fib3(n, 0, 1);
}
console.log(fib3(5))
