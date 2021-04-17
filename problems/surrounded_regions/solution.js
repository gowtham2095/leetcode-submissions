/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function performDfs(board, i, j, isBorderTouched) {
    if (i < 0 || j < 0 || i == board.length || j == board[0].length)
        return;
    if (board[i][j] == 'X' || board[i][j] == 'E')
        return;
    
    if (isBorderTouched) {
        board[i][j] = 'E';
    }
    else
        board[i][j] = 'X';
    performDfs(board, i + 1, j, isBorderTouched);
    performDfs(board, i, j + 1, isBorderTouched);
    performDfs(board, i - 1, j, isBorderTouched);
    performDfs(board, i, j - 1, isBorderTouched);
}

function computeDfs(board) {
    let isBorderTouched = false;
    
    for (let i = 1; i < board.length; i++) {
       if (board[i][0] == 'O')
           performDfs(board, i, 0, true);
    }
    
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] == 'O')
            performDfs(board, 0, j, true);
    }
    
    for (let i = 1; i < board.length; i++) {
       if (board[i][board[0].length - 1] == 'O')
           performDfs(board, i, board[0].length - 1, true);
    }
    
    for (let j = 0; j < board[0].length; j++) {
        if (board[board.length - 1][j] == 'O')
            performDfs(board, board.length - 1, j, true);
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
    
     for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'E')
                board[i][j] = 'O';
        }
     }
}

var solve = function(board) {
    computeDfs(board);
};