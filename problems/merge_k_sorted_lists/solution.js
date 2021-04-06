/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function MinHeap(cap) {
    this.capacity = cap;
    this.list = [];
    let node = new ListNode(-Infinity);
    this.list.push(node);
    this.size = 0;
}

MinHeap.prototype.insert = function (node) {
    for (var i = ++this.size; node.val < this.list[Math.floor(i/2)].val; i = Math.floor(i/2)) {
        this.list[i] = this.list[Math.floor(i/2)];
    }
    this.list[i] = node;
}

MinHeap.prototype.peek = function () {
    return this.list[1];
}

MinHeap.prototype.remove = function () {
    let min = this.list[1];
    let last = this.list[this.size--];
    let child;
    for (var i = 1; (2 * i) <= this.size; i = child) {
        child = 2 * i;
        if (child + 1 <= this.size && this.list[child].val > this.list[child + 1].val)
            child++;
        if (this.list[child].val < last.val)
            this.list[i] = this.list[child];
        else
            break;
    }
    this.list[i] = last;
    return min;
}

function mergeList(lists, resultList, minHeap) {
    for (let i = 0; i < lists.length; i++) {
        let listHead = lists[i];
        if (listHead) {
            minHeap.insert(listHead); 
        }
    }
    while(minHeap.size) {
        let node = minHeap.remove();
        if (node.next)
            minHeap.insert(node.next);
        resultList.next = new ListNode(node.val);
        resultList = resultList.next;
    }
    return resultList;
}

var mergeKLists = function(lists) {
    let minHeap = new MinHeap(Infinity);
    let result = new ListNode(-1);
    mergeList(lists, result, minHeap);
    return result.next;
};
