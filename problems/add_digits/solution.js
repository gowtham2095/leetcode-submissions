/**
 * @param {number} num
 * @return {number}
 */


function addAllDigits(num) {
    let sum = 0;
    while(num != 0) {
        let digit = num % 10;
        num = Math.floor(num/10);
        sum += digit;
    }
    if (Math.floor(sum / 10) != 0)
        return addAllDigits(sum) ;
    else 
        return sum;
}

var addDigits = function(num) {
    return addAllDigits(num);
};




