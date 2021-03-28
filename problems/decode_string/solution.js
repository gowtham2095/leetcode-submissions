/**
 * @param {string} s
 * @return {string}
 */

function decode(s) {
    let i = 0;
    let stack = [];
    let number = '';
    let result = '';
    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            number += s[i];
        } else if (s[i] == '[') {
            stack.push(Number(number));
            number = '';
            stack.push('[');
        } else if (s[i] == ']') {
            let top = stack.pop();
            let temp = '';
            while(top != '[') {
                temp = top + temp;
                top = stack.pop();
            }
            top = stack.pop();
            let str = temp.repeat(top);
            if (stack.length == 0) {
                result = result + str;
            } else {
                stack.push(str);
            }
        } else {
            if (stack.length != 0) {
                stack.push(s[i]);
            } else {
                result = result + s[i];    
            }
        }
        i++;
    }
    return result;
}
var decodeString = function(s) {
    return decode(s);
};

