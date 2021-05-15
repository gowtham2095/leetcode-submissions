/**
 * @param {number[]} A
 */
var RLEIterator = function(A) {
    this.list = A;
    this.ptr = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.zeroJumps = function() {
    while (this.list[this.ptr] == 0) {
        this.ptr = this.ptr + 2;
    }
    return this.ptr;
}

RLEIterator.prototype.next = function(n) {
    if (this.ptr == this.list.length)
        return -1;
    let loopIterator = n;
    while(loopIterator) {
        if (this.list[this.ptr] == 0) {
            this.ptr = this.zeroJumps();
        }
        if (this.ptr == this.list.length) {
            return -1;
        } else {
            let current = this.list[this.ptr];
            if (current < loopIterator) {
                loopIterator = loopIterator - current;
                this.list[this.ptr] = 0;
                this.ptr = this.ptr + 2;
            } else {
                this.list[this.ptr] = this.list[this.ptr] - loopIterator;
                loopIterator = 0 
            }
        }
    }
    return this.list[this.ptr  + 1];
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */



// [3,8,0,9,2,5]


// [3, 8, 8, 0, 9, 2, 5]

// []


