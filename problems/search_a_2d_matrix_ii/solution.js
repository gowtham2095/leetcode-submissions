/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function findTarget(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let colPtr = 0;
    let rowPtr = 0;
    while(colPtr >= 0 && rowPtr < m) {
        while(colPtr != n && matrix[rowPtr][colPtr] <= target) {
           if (matrix[rowPtr][colPtr] == target) {
               return true;
           }
           colPtr++;
        }
        colPtr--;
        rowPtr++;
        while (colPtr != -1 && rowPtr != m && matrix[rowPtr][colPtr] >= target) {
           if (matrix[rowPtr][colPtr] == target) {
               return true;
           }
           colPtr--;
        }
    }
    return false;
}

var searchMatrix = function(matrix, target) {
    return findTarget(matrix, target);
};
