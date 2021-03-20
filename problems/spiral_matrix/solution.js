/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralTraversalMatrix(matrix, top, bottom, left, right, result) {
    while (left <= right && top <= bottom) {
        let startLeft = left;
        while (startLeft <= right) {
            result.push(matrix[top][startLeft])
            startLeft++;
        }
        top++;
        let startTop = top;
        while(startTop <= bottom) {
            result.push(matrix[startTop][right]);
            startTop++;
        }
        right--;
        if (top <= bottom) {
            let startRight = right;
            while(startRight >= left) {
                result.push(matrix[bottom][startRight]);
                startRight--;
            }
            bottom--;
        }
        if (left <= right) {
            let startBottom = bottom;
            while(startBottom >= top) {
                result.push(matrix[startBottom][left]);
                startBottom--;
            }
            left++;
        }

    }
    return result;
}

var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length;
    let left = 0;
    let right = matrix[0].length;
    let result = [];
    spiralTraversalMatrix(matrix, top, bottom - 1, left, right - 1, result);
    return result;
};

