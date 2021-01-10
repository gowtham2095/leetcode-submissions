/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     let hashMap = {};
//     if (nums.length === 1) {
//         return nums[0]
//     }
    
//     for(let i = 0; i < nums.length; i++) {
//         if (hashMap[nums[i]])
//             hashMap[nums[i]] = 2;
//         else
//             hashMap[nums[i]] = 1
//     }
//     let exception;
//     Object.keys(hashMap).forEach((num) => {
//         if (hashMap[num] === 1)
//             exception = num;
//     });
    
//     return exception;
    let result = 0;
    for (let i=0; i<nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};