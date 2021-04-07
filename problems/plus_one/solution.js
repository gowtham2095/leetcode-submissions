/**
 * @param {number[]} digits
 * @return {number[]}
 */

function addOne(digits) {
    let j = digits.length - 1;
    let carry = 1;
    while(j >= 0) {
        if (digits[j] + carry == 10) {
            digits[j] = 0;
            carry = 1;
        } else {
            digits[j] = digits[j] + carry;
            carry = 0;
        }
        j--;
    }
    
    if (carry) {
        digits.unshift(carry);
    }
    
}
var plusOne = function(digits) {
    addOne(digits);
    return digits;
};






