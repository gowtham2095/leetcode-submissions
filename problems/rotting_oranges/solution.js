/**
 * @param {number[][]} grid
 * @return {number}
 */




function rottOranges(grid) {
    let goodOrangeCount = 0;
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] == 1) {
               goodOrangeCount++; 
            }
        }
    }
    
    let rottingOranges = 0;
    let minutes = 0;
    let firstRottenSet = queue.length;
    while(queue.length) {
        let k = queue.length;
        while(k--) {
            let [row, col] = queue.shift();
            for (let [i, j] of [[row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1]]) {
                if (!(i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] == 0 || grid[i][j] == 2)) {
                    // console.log(i, j);
                    queue.push([i, j]);
                    grid[i][j] = 2;
                    rottingOranges++;
                }
            }
        }
        minutes++;
    }
    if (rottingOranges == goodOrangeCount) {
        if (firstRottenSet == 0)
            return 0;
        return minutes - 1;
    }
    return -1;
}

var orangesRotting = function(grid) {
    return rottOranges(grid);
};

  [[0]]      
        // [2,1,1]
        // [0,1,1]
        // [1,0,1]



