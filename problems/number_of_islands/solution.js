/**
 * @param {character[][]} grid
 * @return {number}
 */

function doDfs(grid, i, j) {
    if (i > grid.length -1 || j > grid[0].length - 1 || j < 0 || i < 0)
        return;
    else if (grid[i][j] == '0')  {
        return;
    } else {
        grid[i][j] = '0';
    }
    doDfs(grid, i + 1, j);
    doDfs(grid, i, j + 1);
    doDfs(grid, i - 1, j);
    doDfs(grid, i, j - 1);
}

function countIslands(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++;
                doDfs(grid, i, j);
            }
        }
    }
    return count;
}

var numIslands = function(grid) {
    return countIslands(grid);
};


[["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]]


















// function dfs(grid, i, j) {
    
//     if (i >= grid.length || i < 0 || j < 0 || j >= grid[0].length || grid[i] && grid[i][j] === '0')
//         return;
//     grid[i][j] = '0';
//     dfs(grid, i, j + 1);
//     dfs(grid, i + 1, j);
//     dfs(grid, i, j - 1);
//     dfs(grid, i - 1 , j);
// }

// function countIslands(grid) {
//     let count = 0;
//     for(let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] === '1') {
//                 count++;
//                 dfs(grid, i, j)
//             }
//         }
//     }
//     return count;
// }
