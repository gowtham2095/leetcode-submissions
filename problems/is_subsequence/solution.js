/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */



function isSubsequenceCheck(s, t) {
    let sPtr = 0;
    let i = 0;
    while(i < t.length) {
        if (t[i] == s[sPtr]) {
            sPtr++;
            if (sPtr == s.length) {
                return true;
            }
        }
        i++;
    }
    return false;
}

var isSubsequence = function(s, t) {
    if (s.length == 0) {
        return true;
    }
    return isSubsequenceCheck(s, t);
};





// a -> b -> c


// ab


// ahbgdc



// a hbgd c


// a b c


// ahbgdc