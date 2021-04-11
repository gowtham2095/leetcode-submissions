/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

function totalSum(nums, i) {
    if (i == nums.length)
        return 0;
    return nums[i] + totalSum(nums, i+1);
}

function isFeasible(capacity, nums, m) {
    let total = 0;
    let split = 1;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        if (total > capacity) {
            total = nums[i];
            split++;
            if (split > m)
                return false;
        }
    }
    return true;
}

function binarySearch(nums, m) {
    let left = Math.max(...nums);
    let right = totalSum(nums, 0);
    while (left < right) {
        let mid = left + Math.floor((right - left)/2);
        if (isFeasible(mid, nums, m))
            right = mid;
        else
            left = mid + 1;
    }
    return left;
}

var splitArray = function(nums, m) {
    return binarySearch(nums, m);
};