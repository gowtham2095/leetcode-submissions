/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = -Infinity;
    let sum = 0;
    
    nums.forEach((num) => {
        if (sum + num < 0) {
            sum = 0;
            max = Math.max(num, max);
        } else {
            sum += num;
            max = Math.max(sum, max); 
        }
    });
    return max;
};
