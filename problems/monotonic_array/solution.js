/**
 * @param {number[]} A
 * @return {boolean}
 */


var isMonotonic = function(A) {
    let max = A[0];
    let min = A[0];
    let isMaxMonotone = true;
    let isMinMonotone = true;
    for (let i = 1; i < A.length; i++) {
        if (max < A[i]) {
            isMaxMonotone = false;
            break;
        }
        max = A[i];
    }
    for (let i = 1; i < A.length; i++) {
        if (min > A[i]) {
            isMinMonotone = false;
            break;
        }
        min = A[i];
    }
    return isMaxMonotone || isMinMonotone;
    
};

// max and min




// if num < max
// return false

// if (num < min) 
//     return false