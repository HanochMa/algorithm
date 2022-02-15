/**
 * 字符串出现的不重复最长长度
 * 整体思路：
 * 用一个滑动窗口装没有重复的字符，枚举字符记录最大值即可
 * 对于遇到重复字符如何收缩窗口大小？
 * 用 map 维护字符的索引，遇到相同的字符，把左边界移动过去即可
 * 挪动的过程中记录最大长度
 */
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let i = -1; // 左边界索引
  let res = 0;
  let n = s.length;
  for (j = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]));
      // i = j;
    }
    res = Math.max(res, j - i);
    map.set(s[j], j); // 值-索引
  }
  return res;
}

console.log(lengthOfLongestSubstring("abcdaafffbaadjljiieojdhska"));
