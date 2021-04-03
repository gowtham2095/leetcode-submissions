/**
 * @param {number[][]} grid
 * @return {number}
 */

function computeDfs(grid, i, j, isBoundaryHit) {
  if ((i == 0 || j == 0 || i == grid.length - 1 || j == grid[0].length - 1) && grid[i][j] == 0) {
      isBoundaryHit.isHit = true;
      return;
  }
  if (grid[i][j] == 1)
    return;
  grid[i][j] = 1;
  computeDfs(grid, i + 1, j, isBoundaryHit);
  computeDfs(grid, i - 1, j, isBoundaryHit);
  computeDfs(grid, i, j + 1, isBoundaryHit);
  computeDfs(grid, i, j - 1, isBoundaryHit);
}

function findClosedIslands(grid) {
    let count = 0;
    let isBoundaryHit = {
        isHit: false
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                computeDfs(grid, i, j, isBoundaryHit);
                if (!isBoundaryHit.isHit) {
                    count++
                }
            }
            isBoundaryHit.isHit = false;
        }
    }
    return count;
}

var closedIsland = function(grid) {
    return findClosedIslands(grid);
};