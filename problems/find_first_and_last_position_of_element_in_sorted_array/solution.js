/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearchLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left)/2);
        if (nums[mid] >= target)
            right = mid;
        else
            left = mid + 1;
    }
    return nums[left] == target ? left : -1;
}

function binarySearchRight(nums, target) {
    let left = 0; 
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left)/2);
        if (nums[mid] > target)
            right = mid;
        else
            left = mid + 1;
    }
    return nums[left - 1] == target ? left - 1 : -1;
}

var searchRange = function(nums, target) {
    let left = binarySearchLeft(nums, target);
    let right = binarySearchRight(nums, target);
    return [left, right];
};






