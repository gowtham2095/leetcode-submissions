/**
 * @param {string} digits
 * @return {string[]}
 */

function generateList(digits, numberMap, result, level, combiString) {
    if (level == digits.length) {
        result.push(combiString);
        return;
    }
    for (let letter of numberMap[digits[level]]) {
        generateList(digits, numberMap, result, level + 1, combiString + letter)
    }
}

var letterCombinations = function(digits) {
    if (digits.length == 0)
        return [];
    let numberMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let result = [];
    generateList(digits, numberMap, result, 0, '');
    return result;
};





// ["ad","ae","af","bd","be","bf","cd","ce","cf"]



// 23




