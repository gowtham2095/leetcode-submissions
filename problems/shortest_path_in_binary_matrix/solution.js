/**
 * @param {number[][]} grid
 * @return {number}
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

function QueueADT() {
    this.head = new Node(-1);
    this.tail = this.head;
    this.size = 0;
}

QueueADT.prototype.enqueue = function(val) {
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.size++;
}

QueueADT.prototype.dequeue = function() {
    this.size--;
    this.head = this.head.next;
    return this.head.val;
}

function isInValidRowCol(row, col, maxRow, maxCol, grid, visited) {
    return row < 0 || col < 0 || row == maxRow || col == maxCol || visited.has(row + '#' + col) || grid[row][col];
}


// [[0,0,0],
//  [1,1,0],
//  [1,1,1]]

function findShortestPathBinaryMatrix(grid) {
    
    if (grid[0][0] == 1)
        return -1;
    
    let rowCount = grid.length;
    let colCount = grid[0].length;
    
    let visited = new Set();
    let queue = new QueueADT();
    queue.enqueue({row: 0, col: 0});
    visited.add(0 + '#' + 0);
    let level = 1;
    let count = 1;
    while(queue.size) {
        
        let tempCount = 0;
        while(count) {
            let {row, col} = queue.dequeue();
            if (row == rowCount - 1 && col == colCount - 1)
                return level;
            
            if (!isInValidRowCol(row + 1, col, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row + 1, col: col});
                visited.add((row + 1) + '#' + col);
                tempCount++;
            }
            
            if (!isInValidRowCol(row, col + 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row, col: col+1});
                visited.add(row + '#' + (col + 1));
                tempCount++;
            }
            
            if (!isInValidRowCol(row - 1, col, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row -1, col: col});
                visited.add((row - 1) + '#' + col);
                tempCount++;
            }
            
            if (!isInValidRowCol(row, col - 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row, col: col-1});
                visited.add(row + '#' + (col - 1));
                tempCount++;

            }
            
            if (!isInValidRowCol(row + 1, col + 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row + 1, col: col + 1});
                visited.add((row + 1) + '#' + (col + 1));
                tempCount++;

            }
    
            if (!isInValidRowCol(row - 1, col + 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row - 1, col: col + 1});
                visited.add((row - 1) + '#' + (col + 1));
                tempCount++;

            } 
            
            if (!isInValidRowCol(row + 1, col - 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row + 1, col: col -1});
                visited.add((row + 1) + '#' + (col - 1));
                tempCount++;

            } 
            
            if (!isInValidRowCol(row - 1, col - 1, rowCount, colCount, grid, visited)) {
                queue.enqueue({row: row -1, col: col - 1});
                visited.add((row - 1) + '#' + (col - 1));
                tempCount++;
            }
            count--;
        }
        count = tempCount;
        level++;
    }
    return -1;
}

var shortestPathBinaryMatrix = function(grid) {
    return findShortestPathBinaryMatrix(grid);
};