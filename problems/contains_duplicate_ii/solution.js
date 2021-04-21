/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

function findDuplicate(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined)
            map[nums[i]] = i;
        else {
            if (Math.abs(i - map[nums[i]]) <= k)
                return true;
            map[nums[i]] = i;
        }
    }
    return false;
}

var containsNearbyDuplicate = function(nums, k) {
    return findDuplicate(nums, k);
};