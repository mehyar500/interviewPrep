/**
 * Number of Good Ways to Split a String
 * You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.
 * Return the number of good splits you can make in s.
 * 
 */
/**
 * Problem can be solved with two maps. 
 * First we need to collect counts of every character in a string and also number of unique chars. 
 * This will represent of what we have to the right if we imagine splitting the string and initial position will be at index 0.
 * Then we start moving point of split from left to right all the way to the last string index. 
 * On every move we decrease count of chars for our right side. 
 * At the same time we increase the count of chars for our left side.
 * At the end of every split iteration we check if count of chars to the left equals to count of chars to the right.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {

    const right = new Map();
    
    for (const char of s) {
        if (!right.has(char)) right.set(char, 0);
        right.set(char, right.get(char) + 1);
    }
    
    const left = new Set();
    let res = 0;
    
    for (const char of s) {
        right.set(char, right.get(char) - 1);
        if (right.get(char) === 0) right.delete(char);
        
        left.add(char);
         
        if (right.size === left.size) res++;
        if (right.size < left.size) return res; 
    }
    
    return res;
    
};

