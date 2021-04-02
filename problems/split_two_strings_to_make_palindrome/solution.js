/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */

// Timeout code

// function checkNormalPalindrome(s, i, j) {
//    if (i > j)
//        return true;
//    while(i < j) {
//        if (s[i] != s[j])
//            return false
//        i++;
//        j--;
//    }
//     return true;
// }





// // function checkPalindrome(s1, s2) {
// //     let p1 = 0;
// //     let p2 = s2.length - 1;
// //     while(p1 < s1.length || p2 >= 0) {
// //         if (p1 == s1.length) {
// //             return checkNormalPalindrome(s2, 0, p2);
// //         } else if (p2 < 0) {
// //             return checkNormalPalindrome(s1, p1, s1.length);
// //         } else {
// //             if (s1[p1] != s2[p2]) {
// //                 return false;
// //             }
// //             p1++;
// //             p2--;    
// //         }
// //     }
// //     return true;
// // }

// function checkPali(a, b) {
//     for (let i = -1; i < a.length; i++) {
//         let aPrefix = a.slice(0,i+ 1);
//         let bSuffix = b.slice(i+1, b.length);
//         let bPrefix = b.slice(0, i + 1);
//         let aSuffix = a.slice(i+1, b.length);
//         let hasPali1 = checkNormalPalindrome(aPrefix + bSuffix, 0, aPrefix.length + bSuffix.length - 1);
//         if (hasPali1)
//             return true;
//         let hasPali2 = checkNormalPalindrome(bPrefix + aSuffix, 0, aSuffix.length + bPrefix.length - 1);
//         if (hasPali2)
//             return true
//     }
//     return false;
// }

function isValid(str, i, j) {
   while(i < j) {
       if (str[i] != str[j])
           return false;
       i++;
       j--;
   }
    return true
}

function findBoundaries(a, b) {
    let i = 0;
    let j = a.length - 1;
    while(i < j) {
        if (a[i] !== b[j])
            break;
        i++;
        j--;
    }
    return isValid(a, i, j) || isValid(b, i, j); 
}

var checkPalindromeFormation = function(a, b) {
    // return checkPali(a, b);
    return findBoundaries(a, b) || findBoundaries(b, a);
};