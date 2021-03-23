/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function kThLargestElement(nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];    
}

var findKthLargest = function(nums, k) {
    return kThLargestElement(nums, k);
};