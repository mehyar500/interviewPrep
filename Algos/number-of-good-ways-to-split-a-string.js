/**
 * Number of Good Ways to Split a String
 * You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.
 * Return the number of good splits you can make in s.
 * 
 */

/**
 * Here Idea is to keep track of number of distinct elements in left of split/map and right of split/map.
 * 
 *  
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

