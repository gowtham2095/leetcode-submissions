/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
    let set = new Set();
    let i = 0;
    let result = 0;
    for(j = 0; j < S.length; j++) {
        while(set.has(S[j])) {
            set.delete(S[i++]);
        }
        set.add(S[j])
        if (j - i + 1 === K) {
            result++;
            set.delete(S[i++]);
        }
    }
    return result;
};