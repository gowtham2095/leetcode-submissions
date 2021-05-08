/**
 * @param {number[][]} grid
 * @return {number}
 */
function calcMax(row, col1, col2, grid, cache) {
    if (col1 < 0 || col1 >= grid[0].length || col2 < 0 || col2 >= grid[0].length)
        return 0;
    if (cache[row][col1][col2] != -1)
        return cache[row][col1][col2];
    let result = 0;
    result += grid[row][col1];
    if (col1 != col2)
        result += grid[row][col2];
    if (row != grid.length - 1) {
        let max = 0;
        for (let newCol1 = col1 - 1; newCol1 <= col1 + 1; newCol1++) {
            for (let newCol2 = col2 - 1; newCol2 <= col2 + 1; newCol2++) {
                max = Math.max(max, calcMax(row + 1, newCol1, newCol2, grid, cache));
            }
        }
        result += max;
    }
    cache[row][col1][col2] = result;
    return result;
}


var cherryPickup = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dp = [];
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = [];
            for(let k = 0; k < n; k++) {
                dp[i][j][k] = -1;
            }
        }
    }
    return calcMax(0, 0, n - 1, grid, dp);
};