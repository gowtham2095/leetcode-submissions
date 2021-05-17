/**
 * @param {string[]} strings
 * @return {string[][]}
 */

function charCode(digit) {
    return digit.charCodeAt(0) - 97;
}

function formSequenceId(digits) {
    // console.log(digits)
    let key = '';
    let prev = charCode(digits[0]);
    let i = 1;
    while (i < digits.length) {
        let current = charCode(digits[i]);
        if (current > prev) {
            key = key + '#' + (current - prev);
        } else {
            key = key + '#' + ((current + 26) - prev);
        }
        prev = current;
        i++;
    }
    return key;
}

// 'a l'

var groupStrings = function(strings) {
    let resultMap = {};
    for (let i = 0; i < strings.length; i++) {
        let key = formSequenceId(strings[i].split(''));
        // console.log(key, strings[i]);
        if (resultMap[key] == undefined) {
            resultMap[key] = [];
        }
        resultMap[key].push(strings[i]);
    }
    return Object.keys(resultMap).map((key) => resultMap[key]);
};



// abc -> 11

// a z -> 1 -> 25
// 1 26

// b a -> prev > curr ->  2 1 + 26