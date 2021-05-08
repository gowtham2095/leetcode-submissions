/**
 * @param {number[]} nums
 * @return {number[][]}
 */


// 17 minutes

function permuteList(nums, result, comb, set) {
    if (comb.length == nums.length) {
        result.push([...comb]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            comb.push(nums[i]);
            set.add(nums[i]);
            permuteList(nums, result, comb, set);
            comb.pop();
            set.delete(nums[i]);
        }
    }
}


var permute = function(nums) {
    let result = [];
    permuteList(nums, result, [], new Set());
    return result;
};

