/**
 * @param {number[][]} matrix
 * @return {number}
 */


function findSquareMatricesDp(matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j])
                matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
        }
    }
    
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

var countSquares = function(matrix) {
    return findSquareMatricesDp(matrix);
};


[[1,0,1],
 [1,1,0],
 [1,1,0]]


// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]


// 0, 1, 1, 1

// 1, 1, 2, 2

// 0, 1, 2, 3


// 3 + 6 + 6




// Min of up, diagnol and left + 1

// all 1 include one sided matrix


