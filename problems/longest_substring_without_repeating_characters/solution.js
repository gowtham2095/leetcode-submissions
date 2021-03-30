/**
 * @param {string} s
 * @return {number}
 */

// a b b a
// 0 1 2 3
function maxSubstring(s) {
    if (s.length <= 1)
        return s.length;
    let leftPtr = 0;
    let rightPtr = leftPtr + 1;
    let map = {};
    let max = 1;
    map[s[0]] = 0;
    while(rightPtr < s.length) {
        if (map[s[rightPtr]] != undefined) {
            max = Math.max(max, rightPtr - leftPtr);
            if (leftPtr <= map[s[rightPtr]])
                leftPtr = map[s[rightPtr]] + 1;
        }
        map[s[rightPtr]] = rightPtr;
        rightPtr++;
    }
    max = Math.max(max, rightPtr - leftPtr);
    return max;
}

var lengthOfLongestSubstring = function(s) {
    return maxSubstring(s);
};

// a b c a b c c b b
// 0 1 2 3 4 5 6 7 8

// a: 0
// b: 1
// c: 

// // a: 0
// // b: 2
// left ptr = 2 b:

