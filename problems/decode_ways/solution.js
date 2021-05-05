/**
 * @param {string} s
 * @return {number}
 */


function isValidDecoding(str) {
    return str.length == 2 ? (Number(str) <= 26 && Number(str) >= 10) : Number(str) != 0;
}

function findValidDecodings(s) {
    let count = 0;
    let dp = [];
    dp[s.length] = 1;
    if (s.length == 0)
        return 0;
    function countValidDecodings(str, i) {
        if (dp[i] != undefined) {
            return dp[i];
        }
        let a = isValidDecoding(str.slice(i, i + 1)) && countValidDecodings(str, i + 1);
        let b = 0;
        if (i + 2 <= s.length) {
            b = isValidDecoding(str.slice(i, i + 2)) && countValidDecodings(str, i + 2);
        }
        dp[i] = a + b;
        return dp[i];
    }
    countValidDecodings(s, 0);
    return dp[0];
}

var numDecodings = function(s) {
    return findValidDecodings(s);
};


