/**
 * @param {string} s
 * @return {string}
 */
// 3[a2[c]]

// [3, 'a','cc', ]
 
//  3[a]2[bc]

// ['aaa', 'bcbc' ]

function decodeStr(s) {
    let stack = [];
    
    let res = '';
    let i = 0;
    let num = '';
    while (i < s.length) {
        if (isDigit(s[i])) {
            num += s[i];
        } else if (num != '') {
            stack.push(Number(num));
            num = '';
            stack.push('[');
        } else if (s[i] != ']') {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            let str = ''
            while(top != '[') {
                str = top + str;
                top = stack.pop();
            }
            top = stack.pop();
            stack.push(str.repeat(top));
        }
        i++;
    }
    while(stack.length) {
        let top = stack.pop();
        res = top + res;
    }
    return res;
}


function isDigit(ch) {
    return ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58;
}

var decodeString = function(s) {
    return decodeStr(s)
};



// 3[a]2[bc]



// let res = ''

// // res += popped string from empty string


// 3[a2[c]]







// stack

// ]
// cc
// a
// [
// 3
    
    
//     accaccacc