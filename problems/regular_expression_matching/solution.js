/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function isSAndPEqual(s, p, i, j) {
    return s[i] == p[j] || s[i] != undefined && p[j] == '.';    
}

function isMatchRegex(s, p, i, j) {
    if (i >= s.length && j >= p.length)
        return true;
    if (p[j + 1] == '*') {
        return isMatchRegex(s, p, i, j + 2) || isSAndPEqual(s, p, i, j) && isMatchRegex(s, p, i + 1, j);
    } else if (isSAndPEqual(s, p, i, j)) {
        return isMatchRegex(s, p, i + 1, j + 1);
    } else {
        return false;
    }
}

var isMatch = function(s, p) {
    return isMatchRegex(s, p, 0, 0);
};

""
".*c"




// if characters match then move forward



// if (i == s.length and j == p.length)
//     return true;


// p[i] =='.' || s[i] == p[j]

//     return s[i + 1] , p[j + 1]



// // '' aa
//       a*

// // a* 



// a
// c*
    