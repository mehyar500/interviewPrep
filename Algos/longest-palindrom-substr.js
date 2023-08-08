/**
 * 5. Longest Palindromic Substring
Medium
26.6K
1.6K
Companies
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let start = 0; // Starting index of longest palindrome
  let end = 0; // Ending index of longest palindrome

  for (let i = 0; i < s.length; i++) {
    // Check for palindromes of both even and odd lengths
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);

    // Find the maximum length between the two
    let len = Math.max(len1, len2);

    // If this length is greater than the current longest, update start and end
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1); // Extract and return the longest palindromic substring
}

// Helper function to expand around the center and return the length of the palindrome
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1; // Length of the palindrome
}
