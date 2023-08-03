/**
 * 20. Valid Parentheses
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    

    Example 1:

    Input: s = "()"
    Output: true
    Example 2:

    Input: s = "()[]{}"
    Output: true
    Example 3:

    Input: s = "(]"
    Output: false
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const getCloseBracket = (openBracket) => {
    switch(openBracket) {
        case '(':
            return ')';
        case '[':
            return ']';
        case '{':
            return '}';
        default:
            return '';
    }
};

var isValid = function(s) {
    let bracketsQueue = [];
    let closingBrackets = [')', ']', '}'];

    for(let i = 0; i < s.length; i++) {
        const curr = s[i];

        if(!closingBrackets.includes(curr)) {
            bracketsQueue.push(curr);
        } else {
            if(bracketsQueue.length === 0) {
                return false;
            }

            if(curr !== getCloseBracket(bracketsQueue.pop())) {
                return false;
            }
        }
    }

    return bracketsQueue.length === 0;
};
