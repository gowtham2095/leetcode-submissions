/**
 * @param {number[][]} matrix
 * @return {number}
 */

function doDfs(mat, i, j, prev, dpMat) {
    if (i < 0 || j < 0 || i > mat.length -1 || j > mat[0].length - 1 || mat[i][j] <= prev) {
        return 0;
    }
    if (dpMat[i][j] != 0) {
        return dpMat[i][j];
    } else {
        let leftRight = 1 + doDfs(mat, i, j+1, mat[i][j], dpMat);
        let rightLeft = 1 + doDfs(mat, i, j - 1, mat[i][j], dpMat);
        let bottomUp = 1 + doDfs(mat, i - 1, j, mat[i][j], dpMat);
        let topBottom = 1 + doDfs(mat, i + 1, j, mat[i][j], dpMat);
        dpMat[i][j] = Math.max(dpMat[i][j], Math.max(leftRight, rightLeft, bottomUp, topBottom));
    }
    return dpMat[i][j];
}

function computeLongestPath(mat) {
    let prev = -Infinity;
    let max = -Infinity;
    let dpMat = [];
    for (let i = 0; i < mat.length; i++) {
        dpMat[i] = [];
        for(let j = 0; j < mat[0].length; j++) {
            dpMat[i].push(0);
        }
    }
    for (let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            max = Math.max(max, doDfs(mat, i, j, prev, dpMat));
        }
    }
    return max;
}
var longestIncreasingPath = function(matrix) {
    return computeLongestPath(matrix);
};


