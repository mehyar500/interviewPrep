/**
 * compare-strings-by-frequency-of-the-smallest-character
 * Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.
 * You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.
 * Return an integer array answer, where each answer[i] is the answer to the ith query.
 */

 /**
  * 
  */



  /**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {

    let answer = [];    
    queries.forEach(query => {
        let count = 0;
        query = query.split('').sort().join('');
        words.forEach(word => {
            word = word.split('').sort().join('');      
            if(query.lastIndexOf(query[0]) < word.lastIndexOf(word[0])) {
               count++; 
            }
        });
        answer.push(count);
    });
    return answer;

};