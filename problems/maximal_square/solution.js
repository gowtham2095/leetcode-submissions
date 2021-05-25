/**
 * @param {character[][]} matrix
 * @return {number}
 */



function findMaxSquare(matrix, m, n, max) {
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let min = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i-1][j-1]);
            if (matrix[i][j] == 1) {
                matrix[i][j] = matrix[i][j] + min;
            }
            max = Math.max(max, matrix[i][j]);
        }
    }
    // console.log(matrix);
    return max * max;
}

var maximalSquare = function(matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = Number(matrix[i][j]);
            max = Math.max(max, matrix[i][j]);
        }
    }
    return findMaxSquare(matrix, matrix.length, matrix[0].length, max);
};