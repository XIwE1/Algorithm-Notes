/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const length = nums.length;
    // 冒泡 简单
    // for (let i = 0; i < length; i++) {
    //     // -1：每次排出一个最大的数 只剩一个的时候就不用排了
    //     // -i：不断收敛需要排序的区间，避免浪费性能
    //     for (let j = 0; j < length - 1 - i; j++) {
    //         if (nums[j] > nums[j + 1]) {
    //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    //         }
    //     }
    // }
    // return nums;

    // 快排 利用了分治思想 从整体到局部
    if (length <= 1) return nums;
    const pvoit = nums[~~(length / 2)];
    const left = [];
    const right = [];
    const middle = [];
    for (let num of nums) {
        if (num > pvoit) right.push(num);
        else if (num < pvoit) left.push(num);
        else middle.push(num);
    }
    return [...sortArray(left), ...middle, ...sortArray(right)]


};

sortArray([5,2,3,1]);
// leetcode 912.排序数组 https://leetcode.cn/problems/sort-an-array/description/
//   给你一个整数数组 nums，请你将该数组升序排列。
// 示例 1：
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

// 示例 2：
// 输入：nums = [5,1,1,3,0,0]
// 输出：[0,0,1,1,2,5]

// 提示：
// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104
