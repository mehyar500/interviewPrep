/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * A subsequence is a sequence that can be derived from an array by deleting some 
 * or no elements without changing the order of the remaining elements. 
 * For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 */

function lengthOfLIS(nums) {
    if (!nums.length) return 0;
  
    let arr = new Array(nums.length).fill(1);
      
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
      }
    }
    
    return Math.max(...arr);
  }