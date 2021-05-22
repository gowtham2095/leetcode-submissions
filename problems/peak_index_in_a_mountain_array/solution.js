/**
 * @param {number[]} arr
 * @return {number}
 */

function findIndexOfPeak(arr) {
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        let middle = Math.floor((left + right)/2);
        if (arr[middle] > arr[middle + 1]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
}

var peakIndexInMountainArray = function(arr) {
    return findIndexOfPeak(arr);
};





// finding peak in an mountain array


// binary search

// [24,69,100,99,79,78,67,36,26,19]
// 0       m      



// [0, 1, 2, 3, 4, 5, 6, 7, 3, 1]
// 0                     lr


// if middle > middle + 1 {
//     right = middle;
// } else {
//     left = middle + 1;
// }




