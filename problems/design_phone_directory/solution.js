/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */

function Node(val) {
    this.val = val;
    this.next = null;
}



var Queue = function() {
    this.head = new Node(-1);
    this.tail = this.head;
    this.queueSize = 0;
}

Queue.prototype.insert = function (val) {
    let node = new Node(val);
    this.tail.next = node;
    this.tail = this.tail.next;
    this.queueSize++;
}

Queue.prototype.remove = function (val) {
    if (this.queueSize) {  
        let node = this.head.next;
        this.head = this.head.next;
        this.queueSize--;
        return node.val;
    }
}


var PhoneDirectory = function(maxNumbers) {
    // this.queue = [];
    this.queue = new Queue();
    this.tail = null;
    this.set = new Set();
    this.max = maxNumbers;
    this.releaseSet = new Set();
    this.currentNumber = 0;
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    if (this.queue.queueSize) {
        let n = this.queue.remove();
        this.releaseSet.delete(n);
        this.set.add(n);
        return n;
    } else if (this.currentNumber == this.max) {
        return -1;
    } else {
        let n = this.currentNumber;
        this.set.add(n);
        this.currentNumber++;
        return n;
    }
};

/**
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    if (this.releaseSet.has(number)) {
        return true;
    }
    if (this.set.has(number)) {
        return false;
    }
    if (number >= this.max) {
        return false;
    }
    return true;
};

/**
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    if (this.set.has(number)) {
        this.set.delete(number);
        this.queue.insert(number);
        this.releaseSet.add(number);
    }
};

/** 
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */



