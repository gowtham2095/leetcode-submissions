

function searchBfs(board, target, sourceRow, sourceCol, target) {
    let queue = [];
    let visited = new Set();
    let sequence = '';
    queue.push({sequence: '', row: sourceRow , col: sourceCol});
    while(queue.length) {
        let currentFind = queue.shift();
        let sequence = currentFind.sequence;
        let row = currentFind.row;
        let col = currentFind.col;
        let val = board[row][col];
        if (val == target) {
            return {sequence, row, col};
        }
        visited.add(row + '#' + col);
        let topRow = board[row - 1] && board[row - 1][col];
        let bottomRow = board[row + 1] && board[row + 1][col];
        let leftCol = board[row][col - 1];
        let rightCol = board[row][col + 1];
        if (topRow && !visited.has((row - 1) + '#' + col)) {
            queue.push({sequence: sequence + 'U', row: row - 1, col});
        }
        if (bottomRow && !visited.has((row + 1) + '#' + col)) {
            queue.push({sequence: sequence + 'D', row: row + 1, col});
        }
        if (leftCol && !visited.has(row + '#' + (col - 1))) {
            queue.push({sequence: sequence + 'L', row: row, col: col - 1});
        }
        if (rightCol && !visited.has(row + '#' + (col + 1))) {
            queue.push({sequence: sequence + 'R', row: row, col: col + 1});
        }
    }
}

var alphabetBoardPath = function(target) {
    let board = [['a', 'b', 'c', 'd', 'e'], 
                 ['f', 'g', 'h', 'i', 'j'], 
                 ['k', 'l', 'm', 'n', 'o'], 
                 ['p', 'q', 'r', 's', 't'], 
                 ['u', 'v', 'w', 'x', 'y'], 
                 ['z']];
    let row = 0;
    let col = 0;
    let sequence = '';
    for (let i = 0; i < target.length; i++) {
        let newPos = searchBfs(board, target, row, col, target[i]);
        row = newPos.row;
        col = newPos.col;
        sequence = sequence + newPos.sequence + '!';
    }
    return sequence;
};
