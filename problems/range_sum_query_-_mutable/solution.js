/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.seg = [];
    this.nums = nums;
    buildSegmentTree(nums, 0, nums.length - 1, 0, this.seg);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    update(this.seg, 0, 0, this.nums.length - 1, index, val);
    // console.log(this.seg);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return queryRange(this.seg, 0, this.nums.length - 1, left, right, 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */



function buildSegmentTree(nums, left, right, pos, seg) {
    if (left == right) {
        seg[pos] = nums[left];
        return;
    }
    let middle = Math.floor((left + right )/2);
    buildSegmentTree(nums, left, middle, 2 * pos + 1, seg);
    buildSegmentTree(nums, middle + 1, right, 2 * pos + 2, seg);
    seg[pos] = seg[2 * pos + 1] + seg[2 * pos + 2];
}
        

function queryRange(seg, lo, hi, qlo, qhi, pos) {
    
    if (qlo <= lo && qhi >= hi) {
        return seg[pos];
    } else if (qhi < lo || qlo > hi) {
        return 0;
    } else {
        let middle = Math.floor((hi + lo)/2);
        return queryRange(seg, lo, middle, qlo, qhi,  2 * pos + 1) + queryRange(seg, middle + 1, hi, qlo, qhi, 2 * pos + 2);
    }
}



function update(seg, pos, left, right, index, val) {
    if (left == right) {
        seg[pos] = val;
        return;
    }
    let middle = Math.floor((left + right)/2);
    if (index <= middle) {
        update(seg, 2 * pos + 1, left, middle, index, val);
    } else {
        update(seg, 2 * pos + 2, middle + 1, right, index, val);
    }
    seg[pos] = seg[2 * pos + 1] + seg[2 * pos + 2];
}










                