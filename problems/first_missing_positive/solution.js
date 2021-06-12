/**
 * @param {number[]} nums
 * @return {number}
 */

function findSmallest(nums) {
    let max = Math.max(...nums);
    let set = new Set(nums);
    for (var i = 1; i <= max; i++) {
        if (!set.has(i))
            return i;
    }
    return i;
}
var firstMissingPositive = function(nums) {
    return findSmallest(nums);
};


// [3, 4, -1, 1]

// [7,8,9,11,12]