/**
 * @param {character[][]} board
 * @return {number}
 */

function countBattleshipsIterative(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.')
                continue;
            if (i > 0 && board[i-1][j] == 'X')
                continue;
            if (j > 0 && board[i][j-1] == 'X')
                continue;
            count++;
        }
    }
    return count;
}

function dfs(board, i, j) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || board[i][j] == '.')
        return;
    board[i][j] = '.';
    let top = dfs(board, i - 1, j);
    let left = dfs(board, i, j - 1);
    let right = dfs(board, i + 1, j);
    let bottom = dfs(board, i, j + 1);
    // return top + left + right + bottom;
}

function countBattleShips(board) {
   let boardSize = board.length;
    let result = 0;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 'X') {
                dfs(board, i, j);
                result++;
            }
        }
    }
    return result;
}

var countBattleships = function(board) {
    return countBattleshipsIterative(board);
    // return countBattleShips(board);
};


// [["X",".",".","X"],
//  [".","x","x","X"],
//  [".","x",".","X"]]