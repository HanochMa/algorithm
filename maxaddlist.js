function lis(arr) {
  let len = arr.length,
    dp = new Array(len).fill(1); // 用于保存长度
  for (let i = len - 1; i >= 0; i--) {
    let cur = arr[i];
    console.log("cur:", cur, "i:", i);
    for (let j = i + 1; j < len; j++) {
      let next = arr[j];
      console.log("j:", j, "next:", next);
      // 如果是递增 取更大的长度值
      if (cur < next) dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
  console.log(dp);
  return Math.max(...dp);
}
console.log(lis([3, 5, 7, 2, 1]));
