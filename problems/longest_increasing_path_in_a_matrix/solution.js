/**
 * @param {number[][]} matrix
 * @return {number}
 */


function traverseMaxDfs(matrix, i, j, prev, dp) {
    if (i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[0].length - 1 || prev <= matrix[i][j]) {
        return 0;
    }
    if (dp[i][j] != -1) {
        return dp[i][j];
    }
    let current = matrix[i][j];
    let left =  1 + traverseMaxDfs(matrix, i, j - 1, current, dp);
    let right = 1 + traverseMaxDfs(matrix, i, j + 1, current, dp);
    let top = 1 + traverseMaxDfs(matrix, i - 1, j, current, dp);
    let bottom = 1 + traverseMaxDfs(matrix, i + 1, j, current, dp);
    return dp[i][j] = Math.max(left, right, top, bottom);
}


function getMaxPath(matrix) {
    let max = 0;
    let dp = [];
    for (let i = 0; i < matrix.length; i++) {
        dp[i] = [];
        for(let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = -1
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            max = Math.max(max, traverseMaxDfs(matrix, i, j, Infinity, dp)) 
        }
    }
    return max;
}

var longestIncreasingPath = function(matrix) {
    return getMaxPath(matrix);
};



// [[9,9,4],
//  [6,6,8],
//  [2,1,1]]