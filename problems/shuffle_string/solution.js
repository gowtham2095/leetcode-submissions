/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let finalMap = {};
    let str = s.split('');
    str.forEach((ch, index) => {
       finalMap[indices[index]] = ch; 
    });
    let result = '';
    str.forEach((ch, index) => {
       result += finalMap[index]; 
    });
    return result;
};