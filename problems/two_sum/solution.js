/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let i = 0;
    let j = nums.length - 1;
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == undefined) {
            map[nums[i]] = {};
            map[nums[i]].val = target - nums[i];
            map[nums[i]].index = i;
        } else {
            let mapVal = map[nums[i]];
            if (mapVal.val * 2 == target) {
                return [mapVal.index, i];
            }
        }
    }
    let sumKeys = Object.keys(map);
    for (key of sumKeys) {
        let val = map[key].val;
        let index = map[key].index;
        if (map[val] != undefined) {
            let newMapIndex = map[val].index;
            return [index, newMapIndex]
        }
    }
};