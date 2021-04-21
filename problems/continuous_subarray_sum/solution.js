/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function subArraySum(nums, k) {
    let map = {};
    map[0] = -1;
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
         sum += nums[i];
         sum = sum % k;
        if (map[sum] != undefined) {
            if (i - map[sum] > 1)
                return true;
        }
        else {
            map[sum] = i;
        }
    }
    return false;
}

function subArraySumIsPresent(nums, k, start) {
    if (start == nums.length)
        return false
    let tempSum = nums[start];
    for (let i = start + 1; i < nums.length; i++) {
        tempSum += nums[i];
        if (tempSum % k == 0)
            return true;
    }
    return subArraySumIsPresent(nums, k, start + 1);
}

var checkSubarraySum = function(nums, k) {
    // return subArraySumIsPresent(nums, k, 0);
    return subArraySum(nums, k)
};


// [23,2,6,4,7]

// 23, 25, 31, 35, 42

// 0,   1,  2,  3,  4




// 23, 2, 4, 6, 7



// 23, 25, 29, 35, 42     ->    6




// if sum > k -> move pointer

//     if sum == k
//         add to result
        
        
    