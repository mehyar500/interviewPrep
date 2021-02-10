/**In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  
 * (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
 * We may rotate the ith domino, so that A[i] and B[i] swap values.
 * Return the minimum number of rotations so that all the values in A are the same, 
 * or all the values in B are the same.
 * If it cannot be done, return -1.
 * 
 * Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
 * Output: 2
 * Explanation: 
 * The first figure represents the dominoes as given by A and B: before we do any rotations.
 * If we rotate the second and fourth dominoes, 
 * we can make every value in the top row equal to 2, as indicated by the second figure.
 * 
 * 
 * 
 */

 /**
  * Key insights:
  * The first tile has the only two possibilities for a number all tiles have.
  * There are 4 possible end moves (flip bots to match A, flip tops to match B, and the inverses of each) hence 4 counters.
  * 
  * Algorithm:
  * Choose the two possibilities (top and bot) from the first tile.
  * iterate through tiles. For each:
  * a. Null out any missing possibilities.
  * b. For each present possibility, increment the swap counter representing that that move.
  * If both possibilities were missing at least once, return that no swap solution is possible.
  * Otherwise, return the minimum swap counter from remaining valid possibilities.
  */

 function minDominoRotations (A, B) { // O(n) time O(1) space
    let top = A[0], bot = B[0]
    let only_a_is_top = only_b_is_top = only_a_is_bot = only_b_is_bot = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== top && B[i] !== top) top = null
      else if (A[i] !== B[i]) A[i] === top ? only_a_is_top++ : only_b_is_top++
      if (A[i] !== bot && B[i] !== bot) bot = null
      else if (A[i] !== B[i]) A[i] === bot ? only_a_is_bot++ : only_b_is_bot++
    }
    if (!top && !bot) return -1
    return Math.min(top ? Math.min(only_a_is_top, only_b_is_top) : Infinity
                  , bot ? Math.min(only_a_is_bot, only_b_is_bot) : Infinity)
  };


 // other solution

var minDominoRotations = function(A, B) {
    if (A.length !== B.length) return -1;
    let m = new Map();
    // (key, value) in m represents (num, posiblity of num)
    for (let i = 0; i < A.length; i++) {
        if (A[i] == B[i]) { // for two same numbers at same index, posiblity is still 1
            m.set(A[i], m.get(A[i]) + 1 || 1);
        } else {
            m.set(A[i], m.get(A[i]) + 1 || 1);
            m.set(B[i], m.get(B[i]) + 1 || 1);
        }
    }
    let target = null; // there can be two numbers with posiblity at most but the minimum number of rotations required will be the same so there is no need to iterate through both
    for (let [num, freq] of m) {
        if (freq >= A.length) target = num; // posiblity must be equal to or greater than length of array
    }
    if (target == null) return -1;
    let rotateA = 0, rotateB = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== target) rotateA++;
        if (B[i] !== target) rotateB++
    }
    
    return Math.min(rotateA, rotateB);
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};


