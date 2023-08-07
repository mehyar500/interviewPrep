/**
 * 55. Jump Game
Medium
17.2K
930
Companies
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJumpFromPosition(position, nums) {
    if (position == nums.length - 1) {
      return true;
    }
    let maxJump = Math.min(position + nums[position], nums.length - 1);
    for (let nextPosition = position + 1; nextPosition <= maxJump; nextPosition++) {
      if (canJumpFromPosition(nextPosition, nums)) {
        return true;
      }
    }
    return false;
  }
  
  function canJump(nums) {
    return canJumpFromPosition(0, nums);
  }
  