/**
 * @param {number[]} nums
 * @return {number}
 */

// Boyer Moore's algorithm
// https://www.cs.utexas.edu/~moore/best-ideas/mjrty/

function findMajority(nums) {
    let major = nums[0];
    let count = 1;
    let i = 1;
    while (i < nums.length) {
        if (count == 0) {
            major = nums[i];
            count = 1;
        } else if (nums[i] == major) {
            count++;
        } else {
            count--;
        }
        i++;
    }
    return major;
}

var majorityElement = function(nums) {
    return findMajority(nums);
};




// [2,2,1,1,1,2,2]





// 1, 1, 1, 2, 2, 2