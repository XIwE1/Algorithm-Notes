/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  if (nums.length === 1) return max;
  let pre = 0;
  for (let num of nums) {
    const sum = num + pre;
    max = Math.max(sum, max, num);
    pre = Math.max(sum, num);
    // pre = Math.max(pre + num, num);
    // max = Math.max(max, pre);
  }
  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6
// leetcode 53.最大子数组和 https://leetcode.cn/problems/maximum-subarray/description/
// 通过局部最优解，到全局最优解
// 可以简化为对比两个数字，都是负数 选最大那个，都是正数 合并，一正一负 正在左合并 正在右选正数
// [-2*,1,-3,4,-1,2,1,-5,-4]
// max: -2
// [-2,1*,-3,4,-1,2,1,-5,-4]
// max: 1
// [1,-3*,4,-1,2,1,-5,-4]
// max: 1
// [-2,4*,-1,2,1,-5,-4]
// max: 4
// [4,-1*,2,1,-5,-4]
// max: 4
// [3,2*,1,-5,-4]
// max: 5
// [5,1*,-5,-4]
// max: 6
// [6,-5*,-4]
// max: 6
// [1,-4*]
// max: 6
