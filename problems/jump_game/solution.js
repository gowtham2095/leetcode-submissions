/**
 * @param {number[]} nums
 * @return {boolean}
 */

function canJumpToDestiny(nums) {
    let numLength = nums.length - 1;
    let i = numLength - 1;
    let lastMinIndex = numLength;
    while(i >= 0) {
        if(nums[i] + i >= lastMinIndex) {
            lastMinIndex = i;
        }
        i--;
    }
    return lastMinIndex == 0 ? true : false;
}
var canJump = function(nums) {
    return canJumpToDestiny(nums);
};



