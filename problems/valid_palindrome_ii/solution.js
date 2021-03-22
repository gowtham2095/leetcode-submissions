/**
 * @param {string} s
 * @return {boolean}
 */

function regularPalindromeCheck(s, left, right) {
    while(left <= right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isPalindrome(s) {
    
    let left = 0;
    let right = s.length - 1;
    let count = 1;
    while(left <= right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
               return regularPalindromeCheck(s, left, right - 1) || regularPalindromeCheck(s, left + 1, right);
        }
    }
    return true;
    
}

var validPalindrome = function(s) {
    return isPalindrome(s);
};
