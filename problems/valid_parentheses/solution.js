/**
 * @param {string} s
 * @return {boolean}
 */

function isValidParams(s) {
    let i = 0;
    let stack = [];
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    while(i < s.length) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            let top;
            if (stack.length == 0) {
                return false;
            } else {
                top = stack.pop();
            }
            while(top != map[s[i]]) {
                top = stack.pop();
                if (stack.length == 0)
                    return false;
            }
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    if (stack.length == 0) {
        return true;
    }
    return false;
}

var isValid = function(s) {
    return isValidParams(s);
};
