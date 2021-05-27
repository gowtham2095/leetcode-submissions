/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// function moveZeroesToRight(nums) {
//     let zeroCount = 0;
//     let p1 = nums.length - 1;
//     nums.forEach((num) => {
//        if (num == 0)
//            zeroCount++;
//     });
//     let p2 = p1 - zeroCount;
//     let currentHold = 0;
//     while (p1 != nums.length - 1 - zeroCount) {
//         if (currentHold) {
//             let temp = nums[p2];
//             nums[p2] = currentHold;
//             currentHold = temp;
//             p2--;
//             continue;
//         } else if (nums[p1]) {
//             currentHold = nums[p1];
//             nums[p1] = 0; 
//         }
//         p1++;
//     }
//     if (currentHold) {
//         let temp = nums[p2];
//         nums[p2] = currentHold;
//         currentHold = temp;
//         p2++;
//     }
    
// }


// function moveZeroesToLeft(nums) {
//     let zeroCount = 0;
//     let p1 = 0;
//     nums.forEach((num) => {
//        if (num == 0)
//            zeroCount++;
//     });
//     let p2 = zeroCount;
//     let currentHold = 0;
//     while (p1 != zeroCount) {
//         if (currentHold) {
//             let temp = nums[p2];
//             nums[p2] = currentHold;
//             currentHold = temp;
//             p2++;
//             continue;
//         } else if (nums[p1]) {
//             currentHold = nums[p1];
//             nums[p1] = 0; 
//         }
//         p1++;
//     }
//     if (currentHold) {
//         let temp = nums[p2];
//         nums[p2] = currentHold;
//         currentHold = temp;
//         p2++;
//     }
    
// }




function moveZeroesToRight(nums) {
    let ptr1 = 0;
    let ptr2 = 0;
    while(ptr2 < nums.length) {
        if (nums[ptr2] != 0) {
            nums[ptr1] = nums[ptr2];
            ptr1++;
        }
        ptr2++;
    }
    while(ptr1 < ptr2) {
        nums[ptr1] = 0;
        ptr1++;
    }
    return nums;
}

var moveZeroes = function(nums) {
    return moveZeroesToRight(nums)
};




// [1,3,12,3,12]
//            p1   p2 
// []
// p1
// [0,0,0,3,12]
//   p1 p2


// [0,1,0,3,12] 

// [0, 0, 0, 1, 3, 12, 1, 5]
//           p1              p2
          
          
//           [0,0,0,1,3, 12, 1, 5]
//                p1        p2
    
    
// p1 = 1
// p2 = zeroCount
    
// currentHold = 0
// currentHold = 12
    
//     zeroCount = 3
    
    
    


// [0,0,0,1,3, 0, 1, 5]
//    p1     p1

// holdElement and pointer where element = 

// counted 3


// [0, 0, 0, ]
                    
// No new array and linear time



