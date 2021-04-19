/**
 * @param {number} n
 * @return {string[]}
 */

function generateParans(n, open, close, str, result) {
    if (open == close && open == n) {
        result.push(str);
    }
    if (open < n) {
        generateParans(n, open + 1, close, str + '(', result);
    }
    if (close < open) {
        generateParans(n, open, close + 1, str + ')', result);
    }
}


var generateParenthesis = function(n) {
    let result = [];
    generateParans(n, 0, 0, '', result);
    return result;
};





