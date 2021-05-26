/**
 * @param {number[]} nums
 * @return {number}
 */



function findMinJump(nums, level, dp) {
    if (level >= nums.length - 1) {
        return 0;
    }
    if (dp[level] != undefined) {
        return dp[level];
    }
    let min = Infinity;
    for (let i = 1; i <= nums[level]; i++) {
        let currentJump = 1 + findMinJump(nums, level + i, dp);
        min = Math.min(min, currentJump);
    }
    return dp[level] = min;
}

var jump = function(nums) {
    let dp = {};
    return findMinJump(nums, 0, dp);
};






// [2,3,1,1,4]



// [1, 1, 2, 1, 1]