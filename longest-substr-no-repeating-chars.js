/**
 * 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longestLength = 0;
    let start = 0;
    const currentSubstring = new Map();

    for(let end = 0; end < s.length; end++) {
        const currentChar = s[end]

        if(currentSubstring.has(currentChar)) {
            // Find the previous occurrence's next position
            const nextPosition = currentSubstring.get(currentChar);

            // Only update start if the next position is ahead
            if (nextPosition > start) {
                start = nextPosition;
            }

        }

        // length of the current substring
        const currentLength = end - start + 1

        if(currentLength > longestLength) {
            longestLength = currentLength
        }

        currentSubstring.set(currentChar, end + 1)
    }


    return longestLength;
};