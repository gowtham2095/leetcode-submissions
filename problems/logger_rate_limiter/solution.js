/**
 * Initialize your data structure here.
 */

function MinHeap() {
    this.list = [{val: -Infinity, key: '-1'}];
    this.size = 0;
}

MinHeap.prototype.insert = function(key, val) {
    for (var i = ++this.size; val < this.list[Math.floor(i/2)].val; i= Math.floor(i/2)) {
        this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = {key, val};
}



MinHeap.prototype.remove = function() {
    let first = this.list[0];
    let last = this.list[this.size--];
    let child;
    for (var i = 1; 2 * i <= this.size; i = child) {
        child = 2 * i;
        
        if (child + 1 <= this.size && this.list[child + 1].val < this.list[child].val)
            child = child + 1;
        
        if (this.list[child].val < last.val) {
            this.list[i] = this.list[child];
        } else {
            break;
        }
    }
    this.list[i] = last;
    return first;
}

var Logger = function() {
    this.mapOfLogger = new Map();
    this.heap = new MinHeap();
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */

function canInsertTheLog(timestamp, message, heap, map) {
    // console.log(map, message, timestamp, heap)
    // console.log(timestamp - map.get(message));
    if (map.get(message) != undefined && timestamp - map.get(message) < 10) {
        return false;
    }
    let heapTop = heap.list[1];
    while(heap.size != 0 && timestamp - heapTop.val > 10) {
        // console.log(heap.size)
        let ele = heap.remove();
        map.delete(ele.key);
        heapTop = heap.list[1];
    }
    heap.insert(message, timestamp);
    map.set(message, timestamp);
    // console.log(heap.list)
    return true;
}

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.heap.size === 0) {
        this.heap.insert(message, timestamp);
        this.mapOfLogger.set(message, timestamp);
        return true;
    }
    return canInsertTheLog(timestamp, message, this.heap, this.mapOfLogger);
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */




// [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]
// true        true        false       false       false        true


// [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "jhsdf"], [11, "sdfjn"]

// Maintain a hashmap it would work

// "foo": 1
// "bar": 2
// "foo"




//                         1

//                 2               3  

            
        


// i) If the value is not present in my hashmap push it to the heap then return true

// ii) if the 






// For every incoming log

//     i) If there is nothing in the heap I will push it to the heap
//     ii) If there is a value in the heap and the difference between the root and the value is lesser than or equal to 10 push it to the heap if the value is not present in the map already - else return false
    
//     iii) If the value is greater than 10 then keep removing the heap top till the difference is less than 10 and push it to the heap