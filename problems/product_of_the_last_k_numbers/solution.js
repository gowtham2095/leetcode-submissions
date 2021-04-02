
var ProductOfNumbers = function() {
    this.productArray = [];
    this.lastZerothIndex = -1;
    this.currentProductVal = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.lastZerothIndex = this.productArray.length;
        this.currentProductVal = 1;
        this.productArray.push(num);
    } else {
        this.productArray.push(num * this.currentProductVal);
        this.currentProductVal = num * this.currentProductVal;
    }
};


/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (this.productArray.length - 1 - k < this.lastZerothIndex)
        return 0;
    else {
        let paLength = this.productArray.length -1;
        let kThBefore = paLength - k;
        let KthBeforeEle = this.productArray[kThBefore] || 1
        return this.productArray[paLength]/KthBeforeEle;
    }
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */



