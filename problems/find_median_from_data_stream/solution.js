/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.size === 0 || this.maxHeap.peek() > num) {
        this.maxHeap.insert(num)
    } else {
        this.minHeap.insert(num);
    }
    
    if (this.maxHeap.size - this.minHeap.size > 1) {
        let value = this.maxHeap.remove();
        this.minHeap.insert(value);
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
        let value = this.minHeap.remove();
        this.maxHeap.insert(value);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // console.log(this.maxHeap.size, this.minHeap.size);
    let val = 0;
    if (this.maxHeap.size > this.minHeap.size) {
        val = this.maxHeap.peek();
    } else if (this.maxHeap.size < this.minHeap.size) {
        val = this.minHeap.peek();
    } else {
        // console.log('hit', this.maxHeap.peek(), this.minHeap.peek(), this.maxHeap.list, this.minHeap.list);
        val = (this.maxHeap.peek() + this.minHeap.peek())/2;
    }
    // console.log(this.maxHeap.size, this.minHeap.size, val);
    return val;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */




function MinHeap() {
    this.list = [-Infinity];
    this.size = 0;
}


MinHeap.prototype.insert = function(num) {
    for (var i = ++this.size; num < this.list[Math.floor(i/2)]; i = Math.floor(i/2)) {
        this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = num;
}

MinHeap.prototype.remove = function() {
    let first = this.list[1];
    let last = this.list[this.size--];
    let child;
    for (var i = 1; 2 * i <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child + 1] < this.list[child]) {
            child = child + 1;
        }
        
        if (this.list[child] < last) {
            this.list[i] = this.list[child];
        } else {
            break;
        }
    }
    this.list[i] = last;
    return first;
}

MinHeap.prototype.peek = function() {
    return this.list[1];
}


function MaxHeap() {
    this.list = [Infinity];
    this.size = 0;
}


MaxHeap.prototype.insert = function(num) {
    for (var i = ++this.size; num > this.list[Math.floor(i/2)]; i = Math.floor(i/2)) {
        this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = num;
}

MaxHeap.prototype.remove = function() {
    let first = this.list[1];
    let last = this.list[this.size--];
    let child;
    for (var i = 1; 2 * i <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child + 1] > this.list[child]) {
            child = child + 1;
        }
        
        if (this.list[child] > last) {
            this.list[i] = this.list[child];
        } else {
            break;
        }
    }
    this.list[i] = last;
    return first;
}

MaxHeap.prototype.peek = function() {
    return this.list[1];
}

