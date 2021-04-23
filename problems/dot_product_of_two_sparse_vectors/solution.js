/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.sparseVector = {};
    
    nums.forEach((num, index) => {
        if (num)
            this.sparseVector[index] = num;
    });
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let sum = 0;
    let keys = Object.keys(this.sparseVector);
    let secondVect = vec.sparseVector;
    keys.forEach((key) => {
        if (secondVect[key]) {
            sum += secondVect[key] * this.sparseVector[key];
        }
    });
    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

// [0,1,0,0,2,0,0]