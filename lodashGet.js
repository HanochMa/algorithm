/**
 * _Get
 */
function _get(source, path, defaultValue) {
  let result = source;
  // path转换成数组
  let paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  for (let p of paths) {
    result = Object(result)[p];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}
const a = {
  b: {
    c: 1,
  },
};
console.log(_get(a, "b.c", 123));
