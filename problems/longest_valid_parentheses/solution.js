/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function(s) {
    // let max = {
    //     val: 0
    // };
    // let dp = []
    // longesValidParans(s, 0, 0, max, 0);
    // return max.val;
    return findLongest(s);
};


function findLongest(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        
        if (left == right) {
            max = Math.max(2 * left, max);
        } else if (right >= left){
            left = 0;
            right = 0;
        }
    }
    
    left = 0;
    right = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            max = Math.max(2 * left, max);
        } else if (left >= right) {
            left = 0;
            right = 0;
        }
    }
    return max;
}



// Mistake

// function longesValidParans(s, ptr, count, max, paliLength)  {
//     if (count == 0) {
//         max.val = Math.max(paliLength, max.val);
//     }
//     if (ptr == s.length) {
//         return;
//     }
//     if (s[ptr] == '(') {
//         longesValidParans(s, ptr + 1, count + 1, max, paliLength + 1)
//         longesValidParans(s, ptr + 1, count, max, 0)
//     } else {
//         if (count > 0) {
//             longesValidParans(s, ptr + 1, count - 1, max, paliLength + 1);
//         } else {
//             longesValidParans(s, ptr + 1, count, max, 0);
//         }
//     }
// }

