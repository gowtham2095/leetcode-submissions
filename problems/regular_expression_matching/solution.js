/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function doStringsMatch(s, p, i, j, map) {
    if (map[i + '#' + j])
        return map[i + '#' + j];
    if (j == p.length)
        return i == s.length;
    let first = s[i] != undefined && (p[j] == s[i] || p[j] == '.');
    if (j <= p.length - 2 && p[j + 1] == '*') {
        return map[i + '#' + j] = (doStringsMatch(s, p, i, j + 2, map) || (first && doStringsMatch(s, p, i + 1, j, map)));
    }
    return  map[i + '#' + j] = (first && doStringsMatch(s, p, i + 1, j + 1, map));
}



var isMatch = function(s, p) {
    let map = {};
    return doStringsMatch(s, p, 0, 0, map);
};




// // s = 'a'

// // p = ''

// // s = "", p = "a*"

// s = "b", p = "b"