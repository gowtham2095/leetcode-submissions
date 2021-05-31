/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    return palindromeDP(s);
};


function palindromeDP(s) {
    if (s.length <= 1)
        return s.length;
    let state = [];
    let result = 0;
    let longestString = s[0];
    let longestCount = 1;
    for(let i = 0; i < s.length; i++) {
        state[i] = [];
        state[i][i] = true;
        result++;
    }
    for (let start = s.length - 2; start >= 0; start--) {
        for (let end = start + 1; end < s.length; end++) {
            if (s[start] == s[end]) {
                if (end - start == 1 || state[start + 1][end - 1] == true) {
                    state[start][end] = true;
                    result++;
                }
            }
        }
    }
    
    return result;
}