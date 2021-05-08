/**
 * @param {number} n
 * @return {number}
 */
function findMininumPerfectSquares(searchSpace, target, dp) {
    if (target == 0)
        return 0;
    if (dp[target] != undefined) {
        return dp[target];
    }
    let min = Infinity;
    for (let i = 0; i < searchSpace.length; i++) {
        if (target - searchSpace[i] >= 0) {
            let count = 1 +  findMininumPerfectSquares(searchSpace, target - searchSpace[i], dp);
            min = Math.min(count, min);
        }
    }
    dp[target] = min;
    return min
}

function formPerfectSquares(n) {
    let searchSpace = [];
    for (let i = 1; i * i <= n; i++) {
        searchSpace.push(i * i);
    }
    return searchSpace;
}

var numSquares = function(n) {
    let searchSpace = formPerfectSquares(n);
    let dp = {};
    return findMininumPerfectSquares(searchSpace, n, dp)
};