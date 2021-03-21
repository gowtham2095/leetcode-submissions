/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let middle = Math.floor((left + right)/2);
        
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
};

var findInBinary = function(nums, left, right, target) {
   while(left <= right) {
       let middle = Math.floor((left + right)/2);
       if (nums[middle] == target) {
           return middle;
       } else if (nums[middle] > target) {
           right = middle - 1;
       } else {
           left = middle + 1;
       }
   }
   return -1;
}

var search = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while (left <= right) { 
//       let middle = Math.floor((left + right)/2);
//       if (nums[middle] === target)
//          return middle;
//       else if (target <= nums[middle] && target > nums[left]) {
//          right = middle - 1;
//       } else if (target > nums[middle] && target <= nums[right]) {
//          left  = middle + 1;
//       } else {
//         if (nums[left] >= nums[middle]) {
//           right = middle - 1;
//         } else {
//           left = middle + 1;
//         }
//       }
//     }

//     return -1;
    
    let start = findMin(nums);
    console.log(start);
    console.log(nums[nums.length - 1]);
    if (nums[start] <= target && target <= nums[nums.length - 1]) {
        return findInBinary(nums, start, nums.length -1, target);
    } else {
        return findInBinary(nums, 0, start - 1, target);
    }
};

// 4, 5, 6, 7, 0, 1, 2