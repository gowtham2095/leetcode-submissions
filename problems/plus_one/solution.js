/**
 * @param {number[]} digits
 * @return {number[]}
 */
function addOne(digits) {
    let numLength = digits.length - 1;
    let i = numLength;
    let carry = 1;
    while (i >= 0) {
        if (digits[i] + carry == 10) {
            carry = 1;
            digits[i] = 0;
        } else {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
        i--;
    }
    
    if (carry) {
        digits.unshift(carry);
    }
    return digits;
}

var plusOne = function(digits) {
    return addOne(digits);
};