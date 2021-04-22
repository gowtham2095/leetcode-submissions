/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */


function isValid(s, k, i, j, dpMap) {
    // console.log(s[i], s[j], i, j, k);
    if (dpMap[i + '#' + j] != undefined)
        return dpMap[i + '#' + j];
    if (i >= j) {
        // console.log(i, j, 'test')
        return true;
    }
    if (s[i] == s[j]) {
        console.log(i, j);
        return isValid(s, k, i + 1, j - 1, dpMap);
    } else if (k == 0) {
        return false;
    }
    else {
        console.log(s[i], s[j], i, j, k);
        dpMap[i + '#' + j] = isValid(s, k - 1, i + 1, j, dpMap) || isValid(s, k - 1, i, j - 1, dpMap);
        return dpMap[i + '#' + j];
    }
}


function isValidPali(s, i, j, dpMap) {
    if (dpMap[i + '#' + j] != undefined)
        return dpMap[i + '#' + j];
    if (i >= j) {
        return 0;
    }
    if (s[i] == s[j]) {
        dpMap[i + '#' + j] = isValidPali(s, i + 1, j - 1, dpMap);
        return dpMap[i + '#' + j];
    } else {
        dpMap[i + '#' + j] = 1 + Math.min(isValidPali(s, i + 1, j, dpMap), isValidPali(s, i, j - 1, dpMap));
        return dpMap[i + '#' + j];
    }
}



var isValidPalindrome = function(s, k) {
    let dpMap = {};
    // return isValid(s, k, 0, s.length - 1, dpMap);
    return isValidPali(s, 0, s.length - 1, dpMap) <= k;
};





"b"
 0


// baba