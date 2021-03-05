/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    let output = -1;
    while(left <= right) {
        middle = Math.floor((left + right) / 2);
        
        if (arr[middle] >= middle) {
            if (middle === arr[middle]) {
                output = middle;
            }
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    
    return output;
};