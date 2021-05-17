/**
 * @param {character[][]} grid
 * @return {number}
 */

function countIslands(grid, row, col) {
    if (row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length -1 || grid[row][col] == '0')
        return;
    grid[row][col] = '0';
    countIslands(grid, row + 1, col);
    countIslands(grid, row - 1, col);
    countIslands(grid, row, col + 1);
    countIslands(grid, row, col - 1);
}

var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                countIslands(grid, i, j);
            }
        }
    }
    return count;
};