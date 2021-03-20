/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let isFirstRowHasZero = false;
    let isFirstColumnHasZero = false;
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            isFirstRowHasZero = true;
            break;
        }
    }
    
    for(let j = 0; j < matrix.length; j++) {
        if (matrix[j][0] === 0) {
            isFirstColumnHasZero = true;
            break;
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0
            }
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[0][j] === 0 || matrix [i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    

    if (isFirstRowHasZero) {
        matrix[0].fill(0);
    }
    if (isFirstColumnHasZero) {
        for(let j = 0; j < matrix.length; j++) {
            matrix[j][0] = 0
        }
    }
};

    
    
    
    
    