/**
 * @param {number[]} nums
 * @return {number[]}
 */

function Node(val) {
    this.val = val;
    this.next = null;
}

var productExceptSelf = function(nums) {

    let leftArray = [];
    let rightArray = [];
    
    leftArray.push(1);
    let multiplicationFactor = leftArray[0];
    for (let i = 1; i < nums.length; i++) {
           leftArray[i] = nums[i - 1] * multiplicationFactor;
           multiplicationFactor = leftArray[i];
    }
   
    let multiplier = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        let val = multiplier * leftArray[i];
        leftArray[i] = val;
        multiplier = multiplier * nums[i];
    }
    return leftArray;
};


