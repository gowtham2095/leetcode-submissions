/**
 * @param {number[]} nums
 * @return {number}
 */

function piviotIndex(nums) {
    let leftArray = [];
    let rightArray = [];
    
    leftArray = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        leftArray[i] = nums[i] + leftArray[i - 1];
    }
    rightArray = [nums[nums.length - 1]];
    for (let i = nums.length - 2; i >= 0; i--) {
        rightArray.unshift(nums[i] + rightArray[0])
    }
    for (let i = 0; i < nums.length; i++) {
        if (leftArray[i] == rightArray[i])
            return i;
    }
    
    return - 1;
    
}
var pivotIndex = function(nums) {
    return piviotIndex(nums);
};


//  0 1 2 3 4 5
// [1,7,3,6,5,6]


// 1, 8, 11, 17, 22, 28


// 29,28,20, 17   11     6

// [2,1,-1]

// 2, 3, 2

// 2  0  -1