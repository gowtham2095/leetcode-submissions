/**
 * @param {number} x
 * @return {boolean}
 */

function checkPalindrome(x) {
    let num = x + '';
    let i = 0;
    let j = num.length - 1;
    
    while(i <= j) {
        if (num[i] != num[j])
            return false;
        i++;
        j--;
    }
    
    return true;
}

var isPalindrome = function(x) {
    return  checkPalindrome(x);
};