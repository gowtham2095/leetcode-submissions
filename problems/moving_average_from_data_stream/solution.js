/**
 * Initialize your data structure here.
 * @param {number} size
 */

function Node(val) {
   this.val = val;
   this.next = null;
}

var MovingAverage = function(size) {
    this.windowSize = size;
    this.head = null;
    this.tail = null;
    this.listSize = 0;
    this.currentSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */

MovingAverage.prototype.calculateAverage = function(list, windowSize) {
    return this.currentSum/this.listSize;
}

MovingAverage.prototype.next = function(val) {
    if (this.windowSize != 0) {
        let newNode = new Node(val);
        if (!this.head) {
             this.head = newNode;
             this.tail = this.head;
             this.currentSum = val;
             this.listSize++;    
        } else {
            if (this.listSize == this.windowSize) {
                let temp = this.head.val;
                this.head = this.head.next;
                this.listSize--;
                this.currentSum -= temp;
            }
            this.currentSum += val;
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.listSize++;
        }
        return this.calculateAverage(this.head, this.windowSize)    
    }
    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */