// 冒泡排序
// 冒泡排序的思路是依次比较相邻的两个元素，如果顺序不对则交换它们，这样每一轮结束后，最大的元素就会沉到数组的最后。重复这个过程，直到整个数组有序
function sort1(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = null;
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

//   console.log(sort1([3,7,1,2,0]))

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pro = arr[0];
  const left = [];
  const right = [];
  

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pro ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pro, ...quickSort(right)];
}



console.log(quickSort([3, 7, 1, 2, 0]));
