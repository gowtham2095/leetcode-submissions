/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function twoSum(nums, i, j, target) {
    let result = [];
    while(i < j) {
        if (nums[i] + nums[j] == target) {
            result.push([nums[i], nums[j], -target]);
            i++;
            j--;
            while(i < j && nums[i] == nums[i -1]) {
                i++;
            } 
        } else {
            if (nums[i] + nums[j] < target) {
                i++;
            } else {
                j--;
            }
        }
    }
    return result;
    
}

function withSortFindNums(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let prev = -1;
    let i = 0;
    while (i < nums.length) {
         if (prev == -1 || nums[prev] != nums[i]) {
            if (nums[i] > 0) {
                break;
            } else {
                result = result.concat(twoSum(nums, i+1, nums.length -1, -nums[i]))
            }
        }
        prev = i;
        i++;
    }
    return result;
}

function formTwoSumMap(nums) {
    let map = {};
    let result = [];
    let sum;
    for (let i = 0; i < nums.length; i++) {
        map[-nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j];
            if (map[sum] != undefined && map[sum] != i && map[sum] != j) {
                result.push([nums[i], nums[j], -sum]);
            }
        }
    }
    return result;

}


var threeSum = function(nums) {
   // return  formTwoSumMap(nums);
    return withSortFindNums(nums);
};



 

 