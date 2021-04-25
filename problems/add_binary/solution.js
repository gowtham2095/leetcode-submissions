/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function addBinaryValue(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    
    let result = '';
    let carry = 0;
    while(i >= 0 || j >= 0) {
        let val = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
        result =  val % 2 + result;
        if (val > 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        i--;
        j--;
    }
    if (carry) {
        result = carry + result;
    }
    return result;
}

var addBinary = function(a, b) {
    return addBinaryValue(a, b);
};

// 1 + 1




// carry = 0


