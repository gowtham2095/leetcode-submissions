/**
 * @param {number[]} nums
 * @return {number}
 */

function maxLengthOfLis(nums) {
    let dp = [];
    dp.length = nums.length;
    // dp.fill(1);
    let max = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let currentMax = 1;
        for (let j = i + 1; j < nums.length; j++) {
           if (nums[i] < nums[j]) {
               currentMax = Math.max(1+ dp[j], currentMax);
           }
        }
        dp[i] = currentMax;
        max = Math.max(dp[i], max);
    }
    // console.log(dp);
    return max;
}

var lengthOfLIS = function(nums) {
    return maxLengthOfLis(nums);
};


// [10,9,2,5,3,7,101,18]