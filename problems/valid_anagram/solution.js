/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length)
        return false;
    let charMap = [];
    charMap.length = 26;
    charMap.fill(0);
    let i = 0;
    while(i < s.length) {
        charMap[s[i].charCodeAt(0) - 97]++;
        i++;
    }
    i = 0;
    while(i < t.length) {
        charMap[t[i].charCodeAt(0) - 97]--;
        i++;
    }
    i = 0;
    while(i < 26) {
        if (charMap[i] != 0) {
            return false;
        }
        i++;
    }
    
    return true;
};