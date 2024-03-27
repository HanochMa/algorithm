/**
 * 数组转tree
 * 1.创建一个map，遍历arr，存储每个节点的引用
 * 2.遍历arr，建立其父子关系
 * 3.找到根节点
 */
function array2tree(arr) {
  const treeMap = {};
  // 1
  arr.forEach((item) => {
    treeMap[item.id] = {
      id: item.id,
      val: item.val,
      parentId: item.parentId,
      children: [],
    };
  });
  // 2
  arr.forEach((item) => {
    if (treeMap[item.parentId]) {
      treeMap[item.parentId].children.push(treeMap[item.id]);
    }
  });
  // 3
  const res = arr.filter((item) => !item.parentId)[0];

  return treeMap[res.id];
}
// 1.递归
function array2tree2(arr){

}
let input = [
  {
    id: 1,
    val: "学校",
    parentId: null,
  },
  {
    id: 2,
    val: "班级1",
    parentId: 1,
  },
  {
    id: 3,
    val: "班级2",
    parentId: 1,
  },
  {
    id: 4,
    val: "学生1",
    parentId: 2,
  },
  {
    id: 5,
    val: "学生2",
    parentId: 3,
  },
  {
    id: 6,
    val: "学生3",
    parentId: 3,
  },
];

console.dir(array2tree(input), { depth: null });
