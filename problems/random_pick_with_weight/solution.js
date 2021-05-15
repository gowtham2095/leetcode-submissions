/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefixWeight = [];
    let prefixSum = 0;
    for (let i = 0; i < w.length; i++) {
        prefixSum += w[i];
        this.prefixWeight[i] = prefixSum;
    }
    this.totalSum = prefixSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random() * this.totalSum);
    // let i = 0;
    for (var i = 0; i < this.prefixWeight.length; i++) {
        if (target < this.prefixWeight[i])
            return i;
    }
    return i - 1;
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */





// [1,3]
// 1, 4


