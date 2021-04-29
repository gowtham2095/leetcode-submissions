/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
// function findMinCol(row, i, j) {
//     while(i <= j) {
//         let middle = (i + j)/ 2;
//         if (row[middle] == 1) {
//             j = middle - 1;
//         } else {
//             i = middle;
//         }
//     }
//     return i + 1;
// }

// function returnIndex(matrix) {
//     let [rowLen, colLen] = matrix.dimensions();
//     let i = 0;
//     let res = -1;
//     while(i < colLen) {
//         for (let j = 0; j < rowLen; j++) {
//             if (matrix.get(j, i) == 1) {
//                 res = i;
//                 return res;
//             }
//         }
//         i++;
//     }
//     return res;
// }



[[0,0,0,1]
 [0,0,1,1]
 [0,1,1,1]]

function binarySearch(binary, row, left, right) {
    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        // console.log(left, middle, right)
        if(binary.get(row, middle) == 1) {
            right = middle; 
        } else {
            left = middle + 1;
        }
        // console.log(left, right)
    }
    // console.log(left, right)
    // console.log(binary.get(row, left))
    return binary.get(row, left) == 1 ? left : Infinity;
}




// start from last row - perform binary search





var leftMostColumnWithOne = function(binaryMatrix) {
    // return returnIndex(binaryMatrix)
    let min = Infinity;
    let [row, col] = binaryMatrix.dimensions();
    for (let i = 0; i < row; i++) {
        min = Math.min(min, binarySearch(binaryMatrix, i, 0, col - 1))
    }
    return min == Infinity ? -1 : min;
};


[[0,0],
 [1,1]]


[[0,0,0,1],
 [0,0,1,1],
 [0,1,1,1]]




// [[1,1,1,1,1]
//  [0,0,0,1,1]
//  [0,0,1,1,1]
//  [0,0,0,0,1]
//  [0,0,0,0,0]]

