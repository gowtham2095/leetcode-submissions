/**
 * @param {string} s
 * @return {number}
 */

function calculateIntegerVal(s) {
    let romanMap = {
        'I' : 1,
        'IV': 4,
        'V' : 5,
        'IX' : 9,
        'X' : 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    }
    let i = s.length;
    let total = 0;
    while(i > 0) {
        let str = i - 2 >= 0 ? s.slice(i - 2, i) : s.slice(i - 1, i);
            if (romanMap[str]) {
                total += romanMap[str];
                i = i - 2;
            } else {
                total += romanMap[str[1]];
                i--;
            }
    }
    return total;
}

// 'L V I I I'
//  0 1 2 3 4 
var romanToInt = function(s) {
    return calculateIntegerVal(s);
};