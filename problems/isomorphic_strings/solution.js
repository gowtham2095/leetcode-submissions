/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function areTheyIsomorphic(s, t) {
    let i = 0;
    let charMap = {};
    let charSet = new Set();
    while (i < s.length) {
        if (charMap[s[i]] == undefined) {
            if (charSet.has(t[i])) {
                return false;
            }
            charMap[s[i]] = t[i];
            charSet.add(t[i]);
        } else if (t[i] != charMap[s[i]]) {
                return false;
        }
        i++;
    }
    return true;
}

var isIsomorphic = function(s, t) {
    return areTheyIsomorphic(s, t);
};


