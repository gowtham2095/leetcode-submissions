// /**
//  * @param {number[]} nums
//  */
// var Solution = function(nums) {
//     this.numMap = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (this.numMap[nums[i]] == undefined) {
//             this.numMap[nums[i]] = []
//         }
//         this.numMap[nums[i]].push(i);
//     }
// };

// /** 
//  * @param {number} target
//  * @return {number}
//  */
// Solution.prototype.pick = function(target) {
//     if (this.numMap[target] != undefined) {
        
//     }
//     return 
// };

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

var Solution = function(nums) {
    this.nums = nums;
    this.len = nums.length;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    if (this.len == 1) return 0;
    var result = 0;
    var count = 0;
    for (var i = 0; i < this.len; i++) {
        if (this.nums[i] == target) {
            if (Math.floor(Math.random() * (++count)) == 0) result = i;
        }
    }
    return result;
};



// 3/5

// 2/5

// 1/5



// 1, 2, 3, 3, 3

// 0  1  2. 4  5


// 3: [2, 4, 5]

// 1: [0]

// 2: [1]