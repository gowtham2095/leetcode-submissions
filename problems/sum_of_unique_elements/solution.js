/**
 * @param {number[]} nums
 * @return {number}
 */

function uniqueSum(nums) {
    let numMap = {};
    let total = 0;
    for (let num of nums) {
        if (numMap[num] == undefined) {
            numMap[num] = 1;
            total += num;
        } else if (numMap[num] == 1) {
            total -= num;
            numMap[num] = 2;
        }
    }
    return total;
}

var sumOfUnique = function(nums) {
    return uniqueSum(nums);
};




// let map = {
//     1: count
// }




