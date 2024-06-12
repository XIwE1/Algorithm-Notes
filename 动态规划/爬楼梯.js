/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let fi = 1;
  let fj = 2;
  if (n === 1) return fi;
  if (n === 2) return fj;
  let count;
  for (let i = 3; i <= n; i++) {
    count = fi + fj;
    fi = fj;
    fj = count;
  }
  return count;
};

climbStairs(3); // 3
// leetcode 70.爬楼梯 https://leetcode.cn/problems/climbing-stairs/description/
//   假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶
// 1 <= n <= 45
