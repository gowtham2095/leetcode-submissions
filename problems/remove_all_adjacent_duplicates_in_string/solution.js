/**
 * @param {string} s
 * @return {string}
 */


function removeDupes(s) {
    let res = '';
    let i = 1;
    let stack = [s[0]];
    while(i < s.length) {
        let top;
        if (stack.length) {
            top = stack[stack.length - 1];
        }
        if (top == s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    while(stack.length) {
        let top = stack.pop();
        res = top + res;
    }
    return res;
}
var removeDuplicates = function(s) {
    return removeDupes(s) ;
};


// c a 



// azx xzy