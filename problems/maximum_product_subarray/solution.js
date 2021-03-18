/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxProductArray(nums) {
    let max = nums[0], min = nums[0], result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(max*nums[i], min*nums[i], nums[i]);
        min = Math.min(max*nums[i], min*nums[i], nums[i]);
        max = temp;
        result = Math.max(max, result);
    }
    return result;
}

var maxProduct = function(nums) {
    return findMaxProductArray(nums);
};


// -4, -3, -2



// is zero is spotted - No point including it to be part of a solution, just check if it is max seen so far

// -ve is spotted - it could be part of a solution until we find another negative

// or if we do not find a negative till the end we