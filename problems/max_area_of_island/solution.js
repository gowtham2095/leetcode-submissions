/**
 * @param {number[][]} grid
 * @return {number}
 */
function computeDfs(grid, i, j) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0)
        return 0;
    grid[i][j] = 0;
    let bottom = computeDfs(grid, i + 1, j);
    let top = computeDfs(grid, i - 1, j);
    let right = computeDfs(grid, i, j + 1);
    let left = computeDfs(grid, i, j - 1);
    return 1 + bottom + top + right + left;
}

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0)
        return 0;
    grid[i][j] = 0;
    let bottom = 1 + dfs(grid, i + 1, j);
    let top = 1 + dfs(grid, i - 1, j);
    let right = 1 + dfs(grid, i, j + 1);
    let left = 1 + dfs(grid, i, j - 1);
    let max = Math.max(bottom, top, left, right);
    return max;
}



function maxIslandSize(grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                max = Math.max(max, computeDfs(grid, i, j))
            }
        }
    }
    return max;
}




var maxAreaOfIsland = function(grid) {
    return maxIslandSize(grid);
};