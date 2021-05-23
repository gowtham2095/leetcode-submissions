/**
 * @param {number[][]} grid
 * @return {number}
 */
function markBoundaryZero(grid, i, j, count, isBoundaryPresent) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0) {
        return 0;
    }
    if (i == 0 || j == 0 || i == grid.length -1 || j == grid[0].length - 1) {
        isBoundaryPresent.flag = true;
    }
    grid[i][j] = 0;
    let top = markBoundaryZero(grid, i - 1, j, count, isBoundaryPresent);
    let bottom = markBoundaryZero(grid, i + 1, j, count, isBoundaryPresent);
    let left = markBoundaryZero(grid, i, j - 1, count, isBoundaryPresent);
    let right = markBoundaryZero(grid, i, j + 1, count, isBoundaryPresent);
    return  1 + top + bottom + left + right;
}

var numEnclaves = function(grid) {
    let isBoundaryPresent = {
        flag: false
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                let count1s = markBoundaryZero(grid, i, j, count, isBoundaryPresent);
                if (isBoundaryPresent.flag == false) {
                    count += count1s;
                }
                isBoundaryPresent.flag = false;
            }
        }
    }
    
    return count;
};
    
    
    
    
// Algorithm

// i) If boundary is present in any of the cell then do not add that to finalCount
// ii) Else add it to finalCount