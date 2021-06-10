/**
 * @param {number[]} nums
 * @return {number}
 */

// function maxLengthOfLis(nums) {
//     let dp = [];
//     dp.length = nums.length;
//     let max = 0;
//     for (let i = nums.length - 1; i >= 0; i--) {
//         let currentMax = 1;
//         for (let j = i + 1; j < nums.length; j++) {
//            if (nums[i] < nums[j]) {
//                currentMax = Math.max(1+ dp[j], currentMax);
//            }
//         }
//         dp[i] = currentMax;
//         max = Math.max(dp[i], max);
//     }
//     return max;
// }


function maxLengthOfLis(nums) {
    let dp = [];
    let max = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        let currentMax = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                currentMax = Math.max(dp[j] + 1, currentMax);
            }
        }
        dp[i] = currentMax;
        max = Math.max(max, dp[i]);
    }
    return max;
}

var lengthOfLIS = function(nums) {
    return maxLengthOfLis(nums);
};


// [10,9,2,5,3,7,101,18]
































