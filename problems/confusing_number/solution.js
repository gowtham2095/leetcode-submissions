/**
 * @param {number} N
 * @return {boolean}
 */


var confusingNumber = function(N) {
    let str = N + '';
    let rotationMap = {
        '0' : '0',
        '1' : '1',
        '6' : '9',
        '8' : '8',
        '9' : '6'
    }
    let result = [];
    for (let i = str.length - 1 ; i >= 0; i--) {
        if (!rotationMap[str[i]])
            return false;
        result.push(rotationMap[str[i]]);
    }
    return result.join('') != str;
};