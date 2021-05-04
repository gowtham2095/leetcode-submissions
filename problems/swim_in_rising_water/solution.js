/**
 * @param {number[][]} grid
 * @return {number}
 */
function MinHeap() {
    this.list = [-Infinity];
    this.size = 0;
}

MinHeap.prototype.insert = function(val, i, j) {
    for (var k = ++this.size; val < this.list[Math.floor(k/2)].val; k = Math.floor(k/2)) {
        this.list[k] = this.list[Math.floor(k/2)];
    }
    this.list[k] = {val, i, j};
    
}

MinHeap.prototype.remove = function() {
    let first = this.list[1];
    let last = this.list[this.size--];
    let child;
    for (var i = 1; i * 2 <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child + 1].val < this.list[child].val) {
            child = child + 1;
        }
        if (this.list[child].val < last.val) {
            this.list[i] = this.list[child];
        } else {
            break;
        }
    }
    this.list[i] = last;
    return first;
}




function findTheBestPath(grid) {
    let minHeap = new MinHeap();
    minHeap.insert(grid[0][0], 0, 0);
    let max = 0;
    let visited = {};
    while(minHeap.size) {
        let {val, i, j} = minHeap.remove();
        grid[i][j] = Infinity;
        // console.log(val, ' ', i, j, minHeap.list);
        if (i == grid.length - 1 && j == grid.length - 1) {
            return Math.max(val, max);
        }
        max = Math.max(val, max);
        if (grid[i - 1] && grid[i - 1][j] != undefined && grid[i - 1][j] != Infinity) {
            minHeap.insert(grid[i - 1][j], i - 1, j);
        }
        if (grid[i + 1] && grid[i + 1][j] != undefined && grid[i + 1][j] != Infinity) {
            minHeap.insert(grid[i + 1][j], i + 1, j);
        }
        if (grid[i][j - 1] != undefined && grid[i][j - 1] != Infinity) {
            minHeap.insert(grid[i][j - 1], i, j - 1);
        }
        if (grid[i][j + 1] != undefined && grid[i][j + 1] != Infinity) {
            minHeap.insert(grid[i][j + 1], i, j + 1);
        }
    }
    return max;
}

var swimInWater = function(grid) {
    return findTheBestPath(grid);
};



// [16,11,31,9,1,26],
// [2,25,12,29,20,32],
// [18,34,30,3,0,23],
// [19,35,5,28,27,10],
// [14,6,15,21,33,4],
// [8,22,7,13,24,17]

// 16, 
    
    





// graph - I have to find path from start to end

//         I can move in 4 directions with only one restriction that if I choose a point B the difference should be lesser than t (Edge relationship)





// Answer is finding the least is finding the least elelvation in the path



// Dfs


// [0, 1, 2, 3  4],
// [24,23,22,21,5],
// [12,13,14,15,16],
// [11,17,18,19,20],
// [10, 9, 8, 7, 6]



