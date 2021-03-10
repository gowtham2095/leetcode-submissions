/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    
//     let countArr = [];
//     countArr.length = 1001;
//     countArr.fill(0);
    
//     nums.forEach((num) => {
//        countArr[num]++; 
//     });
//     let i = 1;
//     let j = 1000;
//     let answer = -1;
//     while(i <= j) {
//         if ((i + j) >= k || countArr[j] == 0) {
//             j--;
//         } else {
//             if (countArr[i] > (i < j ? 0 : 1)) {
//                 answer = Math.max(i+j, answer);
//             }
//             i++;
//         }
//     }
    // return answer;
    return twoPointerSolution(nums, k);
};

var twoPointerSolution = function (nums, k) {
    if (nums.length === 1)
        return -1;
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length -1;
    let currentMax = -Infinity;
    let sum;
    while( i != j) {
        sum = nums[i] + nums[j];  
        if (sum >= k) {
            j--;
        } else {
            if (sum > currentMax) {
                currentMax = sum;
            }
            i++;
        }
    }
    return currentMax == -Infinity ? -1 : currentMax;
    
}