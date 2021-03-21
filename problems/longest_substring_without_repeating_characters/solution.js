/**
 * @param {string} s
 * @return {number}
 */

function maxSubstring(s) {
    let max = 0;
    let map = new Map();
    let i = 0;
    let diff = 0;
    let p1 = 0; 
    let p2 = 0;
    while(p2 < s.length) {
        if (map.get(s[p2]) != undefined) {
            p1 = Math.max(p1, map.get(s[p2]) + 1);
        }
        map.set(s[p2], p2);
        max = Math.max(max, (p2 - p1) + 1);
        p2++;
    }
    return max;
}

var lengthOfLongestSubstring = function(s) {
    return maxSubstring(s);
};



