/**
 * @param {number[][]} matrix
 * @return {number}
 */




function calculateSquares(mat) {  
    let result = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) { 
            if (mat[i][j] == 1) {
                if (i == 0 || j == 0) {
                    result += 1;      
                } else {
                    let min = Math.min(mat[i -1][j], mat[i][j -1], mat[i -1][j -1]) + 1;
                    result += min;
                    mat[i][j] = min;
                }
            }
        }
    }
    return result;
}

var countSquares = function(matrix) {
    return calculateSquares(matrix);
};


[[0,0,0],
 [0,1,0],
 [0,1,0],
 [1,1,1],
 [1,1,0]]

[ [ 0, 0, 0 ], 
 [ 0, 1, 0 ], 
 [ 0, 1, 0 ], 
 [ 1, 2, 1 ], 
 [ 1, 2, 0 ] ]

// // [
// //   [0,1,1,1],
// //   [1,1,1,1],
// //   [0,1,1,1]
// // ]


// Row based

// // [0, 1, 2, 3]
// // [1, 2, 3, 4]
// // [0, 1, 2, 3]


// Column based

// //   0 1 1 1

// //   1 2 2 2

// //   0 3 3 3














//   


// 3 + 2 + 1 + 2 + 2 + 2 + 1 + 1 + 1 + 1



// [1,0,1],
// [1,1,0],
// [1,1,0]


// 1, 0, 1
// 1, 2, 0
// 1, 2, 0

// 1 0 1
// 2 1,0
// 3,2,0


// 1 + 1 + 1  + 1 + 1 + 2












