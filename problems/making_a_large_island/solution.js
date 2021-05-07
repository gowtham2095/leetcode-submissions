/**
 * @param {number[][]} grid
 * @return {number}
 */


function dfsApplyVal(grid, i, j, val, id) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] != 'X') {
        return;
    }
    grid[i][j] = {id, value: val}
    dfsApplyVal(grid, i + 1, j, val, id);
    dfsApplyVal(grid, i, j + 1, val, id);
    dfsApplyVal(grid, i - 1, j, val, id);
    dfsApplyVal(grid, i, j - 1, val, id);
}

function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] != 1) {
        return 0;
    }
    grid[i][j] = 'X';
    return 1 + dfs(grid, i + 1, j) + dfs(grid, i, j + 1) + dfs(grid, i - 1, j) + dfs(grid, i, j - 1);
}



function formIslands(grid) {
    let islandCounter = 2;
    let max = 1;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                let count = dfs(grid, i, j);
                max = Math.max(count, max);
                dfsApplyVal(grid, i, j, count, islandCounter);
                islandCounter++;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                let top = (grid[i - 1] && grid[i - 1][j] && grid[i - 1][j]) || {id: - 1, value: 0};
                let bottom = (grid[i + 1] && grid[i + 1][j] && grid[i + 1][j]) || {id: - 1, value: 0};
                let left = (grid[i][j - 1] && grid[i][j - 1]) || {id: - 1, value: 0};
                let right = (grid[i][j + 1] && grid[i][j + 1]) || {id: - 1, value: 0};
                let arr = [top, left, right, bottom];
                for (let i = 0; i < 4; i++) {
                    let set = new Set();
                    set.add(arr[i].id)
                    let val = arr[i].value;
                    for (let j = 0; j < 4; j++) {
                        if (i != j && !set.has(arr[j].id)) {
                            val += arr[j].value;
                            set.add(arr[j].id);
                        }
                    }
                    max = Math.max(val + 1, max);

                }
            }
            
        }
    }
    return max;
}

var largestIsland = function(grid) {
    return formIslands(grid)
};

// [[0,0,0,0,0,0,0],
//  [0,1,1,1,1,0,0],
//  [0,1,0,0,1,0,0],
//  [1,0,1,0,1,0,0],
//  [0,1,0,0,1,0,0],
//  [0,1,0,0,1,0,0],
//  [0,1,1,1,1,0,0]]





