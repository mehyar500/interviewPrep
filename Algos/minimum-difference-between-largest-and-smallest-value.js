/**
 * minimum-difference-between-largest-and-smallest-value in Three Moves
 * Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.
 * Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.
 */


 /**
  * 
  */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    if (nums.length <= 4) return 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i + n - 4 < n; i++) {
        min = Math.min(min, nums[i + n - 4] - nums[i]);
    }
    return min;
};