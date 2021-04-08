/**
 * @param {number[][]} grid
 * @return {number}
 */
function dfs(grid, i, j, val) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0)
        return val;
    let temp = grid[i][j];
    grid[i][j] = 0;
    let down = dfs(grid, i + 1, j, val + temp);
    let right = dfs(grid, i, j + 1, val + temp);
    let top = dfs(grid, i - 1, j, val + temp);
    let left = dfs(grid, i, j - 1, val + temp);
    grid[i][j] = temp;
    return Math.max(down, right, top, left);
}

function getMaxGold(grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                max = Math.max(dfs(grid, i, j, 0), max);
            }
        }
    }
    return max;
}

var getMaximumGold = function(grid) {
    return getMaxGold(grid);
};



// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]


// 6, 8, 9



// for 


