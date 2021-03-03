/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {
    let str = N + '';
    let k = str.length;
    let arr = str.split('');
    let result = 0;
    arr.forEach((num) => {
       result += (Number(num) ** k) 
    });
    return result === N;   
};