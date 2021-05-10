/**
 * @param {number[]} arr
 * @return {number}
 */


// function binarySearch(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right) {
//         let middle = left + Math.floor((right - left)/2);
//         if (middle < left) {
//             right = middle;
//         } else {
//             left = middle + 1;
//         }
//     }
    
// }
//     [0,10,5,2]
//     0        2
//     middle < left

var peakIndexInMountainArray = function(arr) {
    let prev = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < prev) {
            return i - 1;
        }
        prev = arr[i];
    }
};








// i) Go till the point where it is mountain array and if it reduces then return that index