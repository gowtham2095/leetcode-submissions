/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function dfs(i, j, m, n) {
    if (i == m - 1 && j == n - 1)
        return 1;
    if (i == m || j == n)
        return 0;
    let right = dfs(i + 1, j, m, n);
    let bottom = dfs(i, j + 1, m, n);
    return right + bottom;
}


function dfsUniquePaths(m, n) {
    let dp = []
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0)
                dp[i][j] = 1;
            else
                dp[i][j] = 0;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}


var uniquePaths = function(m, n) {
    // return dfs(0, 0, m, n);
    return dfsUniquePaths(m, n);
};




