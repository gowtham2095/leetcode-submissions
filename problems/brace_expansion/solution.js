/**
 * @param {string} s
 * @return {string[]}
 */

function parseInput(s) {
    let parsedInput = [];
    let i = 0;
    while(i < s.length) {
        if (s[i] == '{') {
            let currentList = [];
            i++;
            while(s[i] != '}') {
                if (s[i] != ',') {
                    currentList.push(s[i]);
                }
                i++;
            }
            parsedInput.push(currentList);
        } else {
            parsedInput.push([s[i]]);
        }
        i++;
    }
    return parsedInput;
}

function permuteStrings(list, result, level, combiString) {
    if (level == list.length) {
        result.push(combiString);
        return;
    }
    let currentList = list[level]
    for (let i = 0; i < currentList.length; i++) {
        permuteStrings(list, result, level + 1, combiString + currentList[i])
    }
}

var expand = function(s) {
    let list = parseInput(s);
    let result = [];
    permuteStrings(list, result, 0, '');
    return result.sort();
};



// "{a,b} c {d,e} f"



// {a, }, d, e

 
//  [a, b] [c] [d, e] [f]