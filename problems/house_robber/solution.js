/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxVal(nums, level, max) {
    if (max[level] != undefined) {
        return max[level];
    }
    if (level > nums.length - 1) {
        return 0;
    } else if (level + 1 == nums.length) {
       return nums[level]; 
    }
    return max[level] = Math.max(nums[level] + findMaxVal(nums, level + 2, max), nums[level + 1] + findMaxVal(nums, level + 3, max));
}
var rob = function(nums) {
    let max = {};
    return findMaxVal(nums, 0, max)
};




// [2,7,9,3,1]


// [7, 2, 1, 9]