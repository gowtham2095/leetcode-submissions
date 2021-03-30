/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(a, b, nums) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

function nextPermutationCompute(nums) {
    let arrPtr = nums.length - 1;
    let prev = arrPtr;
    arrPtr --;
    while(arrPtr >= 0) {
        if (nums[prev] <= nums[arrPtr]) {
            prev = arrPtr;
            arrPtr--;
        } else {
            break;
        }
    }
    
    if (arrPtr < 0)
        return nums.reverse();
    
    let min = Infinity;
    let index = -1;
    let ptr = arrPtr + 1;
    let swapNum = nums[arrPtr];
    while(ptr < nums.length) {
        if (nums[ptr] <= swapNum){
            break;
        }
        if (nums[ptr] <= min) {
            min = nums[ptr];
            index = ptr;
        }
        ptr++;
    }
    swap(arrPtr, index, nums);
    ptr = arrPtr + 1;
    let end = nums.length - 1
    while (ptr <= end) {
        swap(ptr, end, nums);
        ptr++;
        end--;
    }
}

var nextPermutation = function(nums) {
    nextPermutationCompute(nums);
};
