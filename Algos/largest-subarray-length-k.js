/**
 * largest-subarray-length-k
 * Given an array of integers, 
 * our goal is to find the length of largest subarray having sum of its elements atmost ‘k’ where k>0.
 * 
 */

/**
 * Traverse the array and check if on adding the current element its sum is less than or equal to k.
 * If it’s less than k then add it to sum and increase the count.
 * else Remove the first element of subarray and decrease the count.
 * Again check if on adding the current element its sum is less than or equal to k.
 * If it’s less than k then add it to sum and increase the count.
 * Keep track of Maximum count.
 * 
 * For all pairs of integers, i ≤ j, check whether the sum of A[i..j] is greater than the maximum sum so far
 * 
 */


function findMaxSubArrayBruteForce(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;
            for (var k = i; k <= j; k++) {
                maxSum += arr[k];

                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}
 