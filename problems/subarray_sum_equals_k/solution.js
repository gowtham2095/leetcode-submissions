/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// dp [i, j] = dp[i, j-1] + dp[j, j]
// function dpSubArray(nums, k) {
//     let dpMap = {}
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let key = i + '#' + i;
//         dpMap[key] = nums[i];
//         if (dpMap[key] == k)
//             count++;
//     }
//     for (let i = nums.length - 1; i >= 0; i--) {
//         for (let j = i + 1; j <= nums.length - 1; j++) {
//             let mainKey = i + '#' + j;
//             let leftKey = i + '#' + (j - 1);
//             let rightKey = j + '#' +  j;
//             dpMap[mainKey] = dpMap[leftKey] + dpMap[rightKey];
//             if (dpMap[mainKey] == k) {
//                 count++;
//             }
//         }
//     }
//     return count++;
// }

function findSubarraySum(nums, k) {
    let map = {
        0: 1
    }
    let count = 0;
    let cumulativeSum = 0;
    for (let i = 0; i < nums.length; i++) {
        cumulativeSum += nums[i];
        if (map[cumulativeSum - k]) {
            count += map[cumulativeSum - k];
        }
        map[cumulativeSum] = map[cumulativeSum] ? map[cumulativeSum] + 1 : 1;
    }
    return count;
}

var subarraySum = function(nums, k) {
    // return dpSubArray(nums, k);
    return findSubarraySum(nums, k);
};




// map = {}


// 1, 2, 3

// 1, 2

// 3



// 1, 1, 1



//    0 1, 2, -1, 1



// dp 1 1  3 







// 1, 2, 3




// 1, 2, 3

// 6


// 1, 2, 3



// 1

// 2

// 3

// 4







    



// subarray - it needs to be continuous

// the value can be negative also

// brute force

// from i = 0 to n
//  from j = i + 1 to n
//    add subArray(i, j) to subArrayList[]

// now check if each subArray has the sum to be equal to k and add it to the list

//         element [i, j]  where i == j sumOfSubArray = str[i];
        

// 1, 1, 1
// 0  1  2

// 5

// 1 2 3 4 5 6



// 4
        

// dp [i, j] = dp[i, j-1] + dp[j, j]

// dp[5, 6] = dp[5, 5] + dp[6, 6]
//          = 11

// dp[4, 5] = dp[4, 4] + dp[5, 5];

// dp[4, 6] = dp[4, 5] + dp[6, 6];

// dp[3, 4] = dp[3, 3] + dp[4, 4];

// dp[3, 5] = dp[3, 4] + dp[5, 5];




