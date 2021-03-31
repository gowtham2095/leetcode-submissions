/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

function removeBackSpaces(s) {
    let stack = [];
    let i = 0;
    while(i < s.length) {
        if (s[i] == '#') {
            if (stack.length != 0) {
                stack.pop();
            }
        } else {
            stack.push(s[i]);
        }
        i++
    }
    return stack.join('');
}

var backspaceCompare = function(S, T) {
    return removeBackSpaces(S) == removeBackSpaces(T);
};