/**
 * @param {number} n
 * @return {number}
 */



function permuteVowels(level, n, prev, dp, modulo) {
    let count = 0;
    if (dp[level][prev] != undefined) {
        return dp[level][prev];
    }
    if (level == n - 1) {
        return 1;
    } else if (prev == 0) {
        count = permuteVowels(level + 1, n, 1, dp, modulo);
    } else if (prev == 1) {
        count = permuteVowels(level + 1, n, 0, dp, modulo) + permuteVowels(level + 1, n, 2, dp, modulo) 
    } else if (prev == 3) {
        count = permuteVowels(level + 1, n, 2, dp, modulo) + permuteVowels(level + 1, n, 4, dp, modulo)
    } else if (prev == 4) {
        count = permuteVowels(level + 1, n, 0, dp, modulo)
    } else {
        for (let i = 0; i < 5; i++) {
            if (i != 2) {
               count += permuteVowels(level + 1, n, i, dp, modulo) 
            }
        }
    }
    return dp[level][prev] = count % modulo;
}

var countVowelPermutation = function(n) {
    let count = 0;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = {};
    }
    let modulo = 1000000007;
    for (let i = 0; i < 5; i++) {
        count += (permuteVowels(0, n, i, dp, modulo) % modulo);
    }
    return count % modulo;
};