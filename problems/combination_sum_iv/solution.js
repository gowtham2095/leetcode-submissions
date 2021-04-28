/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findCombiSum(n, tar) {
    let count = 0;
    let map = {};
    function findAllCombSum(nums, target, sum) {
        if (map[target - sum] != undefined)
            return map[target - sum];
        if (sum == target) {
            return 1;
        } else if (sum > target) {
            return 0;
        }
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            result += findAllCombSum(nums, target, sum + nums[i]);  
        }
        map[target - sum] = result
        return result;
    }
    return findAllCombSum(n, tar, 0);
    // return count;
}


function findCombiDP(n, tar) {
    let dp = [];
    dp[0] = 1;
    
    let count = 0;
    for (let i = 1; i <= tar; i++) {
       dp[i] = 0;
       for (let j = 0; j < n.length; j++) {
           if ((i - n[j]) >= 0) {
                dp[i] += dp[i - n[j]];
           }
       }
       // console.log(dp[i])
    }
    // console.log(dp)
    return dp[tar];
}

var combinationSum4 = function(nums, target) {
    return findCombiDP(nums, target);
    // return findCombiSum(nums, target);
};

// // 0
// // [1,2,3]


// // 0

// // 1

// // 3

// // 4 + 2 + 1

// // // target is achieved then add all numbers which took me till there


// // 0 -> 0

// // 1 -> 1

// // 2 -> 2
        
// 0 = 1
// 1 = dp[0] - 1

// 2 = dp[1] + dp[0] - 2

// 3 = dp[2] + dp[1] - 3

// 4 = dp[3] + dp[2] - 5



// // 1