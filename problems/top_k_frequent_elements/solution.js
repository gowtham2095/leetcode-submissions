/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function MinHeap(size) {
    this.capacity = size;
    this.size = 0;
    this.list = [];
    this.list.push({key:-Infinity, val: -Infinity});
}

MinHeap.prototype.insert = function (key, val) {
    for (var i = ++this.size; val < this.list[Math.floor(i/2)].val; i = Math.floor(i/2)) {
        this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = {key: key, val: val};
}

MinHeap.prototype.remove = function () {
    let top = this.list[1].key;
    let last = this.list[this.size--];
    let child;
    for (var i = 1; i * 2 <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child].val > this.list[child+1].val)
            child++; 
        if (this.list[child].val < last.val)
            this.list[i] = this.list[child]
        else
            break;
    }
    this.list[i] = last;
    return top;
}

function findKFreq(numMap, k) {
    let minHeap = new MinHeap(Infinity);
    let nums = Object.keys(numMap);
    // console.log(nums);
    for (const num of nums) { 
        minHeap.insert(num, numMap[num]);
        if (minHeap.size > k)
            minHeap.remove();
    }
    // console.log(minHeap.list);
    let result = [];
    for (let i = 0; i < k; i++)
        result.push(minHeap.remove());
    return result;
}

var topKFrequent = function(nums, k) {
    let map = {};
    for (const num of nums) {
        if (map[num] == undefined)
            map[num] = 0;
        map[num]++;
    }
    return findKFreq(map, k);
};

