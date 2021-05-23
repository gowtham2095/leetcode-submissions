/**
 * @param {number[][]} grid
 * @return {number}
 */



function findMaxDistance(grid, n) {
    let queue = [];
    let seen = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue.push([i, j]);
                seen.add(i + '#' + j);
            }
        }
    }
    if (queue.length == n * n)
        return -1;
    let depth = 0;
    while(queue.length) {
        let k = queue.length;
        while(k--) {
            let [row, col] = queue.shift();
            for (let [i, j] of [[row -1, col], [row + 1, col], [row, col + 1], [row, col - 1]]) {
                if (!(i < 0 || j < 0 || i > n - 1 || j > n - 1 || seen.has(i + '#' + j))) {
                    queue.push([i, j])
                    seen.add(i+ '#' + j);
                }
            }
        }
        depth++;
    }
    return depth - 1;
}

var maxDistance = function(grid) {
    return findMaxDistance(grid, grid.length);
};


// [[1,0,1],
//  [0,0,0],
//  [1,0,1]]

// [[1,0,1],
//  [0,0,0],
//  [1,0,1]]



// [1,0,0]
// [0,0,0]
// [0,0,0]

// [X,1,2],
// [1,2,3],
// [2,3,4]




// [[1,1,1],
//  [1,2,1],
//  [1,0,1]]





// things I have to check for is 



// [[Infinity,Infinity,0],
//  [Infinity,Infinity,Infinity],
//  [0,Infinity,0]]
