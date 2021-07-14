/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


function MaxHeap() {
    this.list = [{index: - 1, val: Infinity}];
    this.size = 0;
    this.heapMap = {};
}

MaxHeap.prototype.insert = function (val, index) {
    for (var i = ++this.size; val > this.list[Math.floor(i/2)].val; i = Math.floor(i/2)) {
        let temp = this.list[Math.floor(i/2)];
        this.list[i] = temp;
        this.heapMap[temp.index] = i;
    }
    this.list[i]= { val, index};
    this.heapMap[index] = i;
}

MaxHeap.prototype.peek = function () {
    return this.list[1].val;
}

MaxHeap.prototype.remove = function(index = 1) {
    let ptr = this.heapMap[index]
    let first = this.list[ptr];
    let last = this.list[this.size--];
    let child;
    for (var i = ptr; 2 * i <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child + 1].val >= this.list[child].val) {
            child = child + 1;
        }
        
        if (this.list[child].val > last.val) {
            let temp = this.list[child];
            this.list[i] = this.list[child];
            this.heapMap[temp.index] = i;
        } else {
            break;
        }
    }
    let temp = last;
    this.list[i] = last;
    this.heapMap[temp.index] = i;
    return first;
}


function slidingWindowMax(nums, k) {
    let maxHeap = new MaxHeap();
    for (let i = 0; i < k; i++) {
        maxHeap.insert(nums[i], i);
    }
    let cptr = 0;
    let result = [];
    for (let i = k; i < nums.length; i++) {
        result.push(maxHeap.peek());
        maxHeap.remove(cptr);
        maxHeap.insert(nums[i], i);
        console.log(maxHeap.list, 'Val', nums[i]);
        // console.log(maxHeap.heapMap);
        cptr++;
    }
    result.push(maxHeap.peek());
    // console.log(result);
    return result;
}

// var maxSlidingWindow = function(nums, k) {
//     return slidingWindowMax(nums, k);
// };

var maxSlidingWindow = function(nums, k) {
    const q = [];  // stores *indices*
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        while (q && nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        // remove first element if it's outside the window
        if (q[0] === i - k) {
            q.shift();
        }
        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
    }
    return res;    
};



// [1,3,-1,-3,5,3,6,7]


// function max slide 





// cases