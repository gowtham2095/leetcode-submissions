/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var wiggleSort = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if ((i % 2 == 0) ==  (nums[i] > nums[i+1])) {
            swap(nums, i, i+1);
        }
    }
    return nums;
};