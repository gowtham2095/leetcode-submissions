/**
 * @param {number[][]} grid
 * @return {number}
 */

function findMinPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    for (let i = 1; i < m; i++) {
        grid[i][0] = grid[i-1][0] + grid[i][0];
    }
    
    for (let j = 1; j < n; j++) {
        grid[0][j] = grid[0][j-1] + grid[0][j];
    }
    
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            let top = grid[i-1][j];
            let left = grid[i][j-1];
            grid[i][j] = Math.min(top, left) + grid[i][j];
        }
    }
    return grid[m-1][n-1];
}


var minPathSum = function(grid) {
    return findMinPathSum(grid);
};