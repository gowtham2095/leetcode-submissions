/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = nums[0];
    let runningSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if (runningSum + nums[i] > nums[i]) {
            runningSum = runningSum + nums[i];
        } else {
            runningSum = nums[i];
        }
        if (runningSum > max) {
            max = runningSum
        }
    }
    return max;
};