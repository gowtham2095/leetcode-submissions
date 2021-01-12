/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    let min = Infinity;
    let minIndex;
    
    A.forEach((num, index) => {
      if (min > num) {
          min = num;
          minIndex = index;
      }
    })
    let maxElement = -Infinity;
    
    for (let i = 0; i <= minIndex; i++) {
        if (A[i] > maxElement) {
            maxElement = A[i];
        }
    }
    let resultIndex = minIndex;
    let possibleMax = maxElement;
    for (let i = resultIndex + 1; i < A.length; i++) {
        if (A[i] > possibleMax) {
            possibleMax = A[i];
        }
        if (A[i] < maxElement) {
            resultIndex = i;
            maxElement = possibleMax;
        }
    }
    return resultIndex + 1;
};