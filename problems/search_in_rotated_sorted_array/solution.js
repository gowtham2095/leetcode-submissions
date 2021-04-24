/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var findMin = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left < right) {
//         let middle = Math.floor((left + right)/2);
        
//         if (nums[middle] > nums[right]) {
//             left = middle + 1;
//         } else {
//             right = middle;
//         }
//     }
//     return left;
// };

// var findInBinary = function(nums, left, right, target) {
//    while(left <= right) {
//        let middle = Math.floor((left + right)/2);
//        if (nums[middle] == target) {
//            return middle;
//        } else if (nums[middle] > target) {
//            right = middle - 1;
//        } else {
//            left = middle + 1;
//        }
//    }
//    return -1;
// }

// var search = function(nums, target) {
    
//     let start = findMin(nums);
//     if (nums[start] <= target && target <= nums[nums.length - 1]) {
//         return findInBinary(nums, start, nums.length -1, target);
//     } else {
//         return findInBinary(nums, 0, start - 1, target);
//     }
// };

// 4, 5, 6, 7, 0, 1, 2


// [6,7,0,1,2, 4,5]
//  l   r         r                   


// 1, 3
// 0  1


// 0

function findTheSplitPoint(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let middle = left + Math.floor((right - left)/2);
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}

function binarySearch(arr, left, right, target) {
    while(left <= right) {
        let middle = left + Math.floor((right - left)/2);
        if (arr[middle] == target)
            return middle;
        else if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return - 1;
}


function binarySearchOnePass(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let middle = left + Math.floor((right - left)/2);
        if (nums[middle] == target)
            return middle;
        else if (nums[middle] >= nums[left]) {
            if (target <= nums[middle] && target >= nums[left]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        } else {
            if (target <= nums[right] && target >= nums[middle]) {
                left = middle;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;
}


function search(nums, target) {
    // let splitPoint = findTheSplitPoint(nums);
    // let res1 = binarySearch(nums, 0, splitPoint - 1, target);
    // let res2 = binarySearch(nums, splitPoint, nums.length, target);
    // return (res1 != -1) ? res1 : res2;

    return binarySearchOnePass(nums, target);
    
}
















