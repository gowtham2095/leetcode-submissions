/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function wiggleWiggle(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (i % 2) {
            if (nums[i] < nums[i - 1]) {
                swap(nums, i, i - 1);
            }
        } else {
            if (nums[i] > nums[i - 1]) {
                swap(nums, i, i - 1);
            }
        }
    }
}

var wiggleSort = function(nums) {
    wiggleWiggle(nums);
    return nums;
};




// [3,5,2,1,6,4]


//    3 < 5
//    5 > 2
//    2 < 1 ? nope so swap 3, 5, 1, 2
//    2 > 6 ? nope so swap 3, 5, 1, 6, 2
//    2 < 4 yes
   
   
//    3, 5, 1, 6, 2, 4
   