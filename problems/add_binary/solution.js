/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function add(a, b) {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while(i >= 0 || j >= 0) {
        let numberA = Number(a[i]) || 0;
        let numberB = Number(b[j]) || 0;
        let sum = numberA + numberB + carry;
        if (sum == 2) {
            carry = 1;
            sum = 0;
        } else if (sum == 3) {
            sum = 1;
            carry = 1;
        } else {
            carry = 0;
        }
        result = sum + result;
        i--;
        j--;
    }
    
    if (carry) {
        result = carry+ result;
    }
    
    return result;
}
var addBinary = function(a, b) {
    return add(a, b);
};