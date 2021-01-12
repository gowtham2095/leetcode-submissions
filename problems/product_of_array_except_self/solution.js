/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let cumulativeValue = 1;
    let output = [];
    if (nums.length) {
        output.push(1);
    }
    for (let i = 1; i < nums.length; i++) {
        cumulativeValue = cumulativeValue * nums[i - 1];
        output[i] = cumulativeValue;
    }
    cumulativeValue = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        cumulativeValue = cumulativeValue * nums[i + 1];
        output[i] = output[i] * cumulativeValue;
    }
    return output;
};


