/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function dfs(board, i, j, word, p) {
    if (i < 0 || j < 0 || i == board.length || j == board[0].length || board[i][j] != word[p])
        return false;
    if (p == word.length - 1)
        return true;
    let temp = board[i][j];
    board[i][j] = '';
    let bottom = dfs(board, i + 1, j, word, p + 1);
    let right = dfs(board, i, j + 1, word, p + 1);
    let top = dfs(board, i - 1, j, word, p + 1);
    let left = dfs(board, i, j - 1, word, p + 1);
    board[i][j] = temp;
    return left || right || bottom || top;
}

function doesWordExist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word, 0))
                return true;
        }
    }
    return false;
}

var exist = function(board, word) {
    return doesWordExist(board, word);
};