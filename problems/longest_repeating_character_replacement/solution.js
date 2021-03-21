/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function returnMaxWindow(s, k) {
    let left = 0;
    let right = 0;
    
    let maxOccurenceOfChar = 0;
    let max = 0;
    let count = [];
    let diffCharacters = 0;
    while(right < s.length) {
        if (!count[s.charCodeAt(right)])
            count[s.charCodeAt(right)] = 0;
        count[s.charCodeAt(right)]++;
        maxOccurenceOfChar = Math.max(maxOccurenceOfChar, count[s.charCodeAt(right)]);
        diffCharacters = (right - left + 1) - maxOccurenceOfChar;
        console.log(diffCharacters);
        if (diffCharacters > k) {
            count[s.charCodeAt(left)]--;
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
}


// AABAABCC


var characterReplacement = function(s, k) {
    return returnMaxWindow(s, k);
};
