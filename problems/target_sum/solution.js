/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */


function findCombiString(nums, level, target, currentSum, dp) {
    if (level == nums.length) {
        return currentSum == target ? 1 : 0;
    }
    if (dp.get(level)[currentSum] != undefined) {
        return dp.get(level)[currentSum];
    }
    let plusSide = findCombiString(nums, level + 1, target, currentSum + nums[level], dp);
    let minusSide = findCombiString(nums, level + 1, target, currentSum - nums[level], dp);
    let map = dp.get(level);
    map[currentSum] = plusSide + minusSide;
    return map[currentSum];
}

var findTargetSumWays = function(nums, S) {
    let dp = new Map();
    for (let i = 0; i < nums.length; i++) {
        dp.set(i, {});
    }
    let result = findCombiString(nums, 0, S, 0, dp);
    return result
};



//                         1

//                     1       1


//                 1



//             1           
                
    



