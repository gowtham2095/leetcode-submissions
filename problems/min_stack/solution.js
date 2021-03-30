/**
 * initialize your data structure here.
 */

// -2 0 -3


var MinStack = function() {
    this.stack = [];
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.minStack.length == 0) {
        this.minStack.push(val);
    }
    else {
        if(this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
        }
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let element = this.stack.pop();
    if (element == this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
    return element;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};



// priorityQueue

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */