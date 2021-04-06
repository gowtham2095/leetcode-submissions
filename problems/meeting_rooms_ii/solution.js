/**
 * @param {number[][]} intervals
 * @return {number}
 */


function MinHeap(size) {
	this.capacity = size;
	this.heapList = [];
	this.heapList.push(-1);
    this.heapSize = 0;
}
		
// Percolate up
MinHeap.prototype.insert = function (val) {
	if (this.capacity != this.heapSize) {
		for (var i = ++this.heapSize; val < this.heapList[Math.floor(i/2)]; i = Math.floor(i /2)) {
			this.heapList[i] = this.heapList[Math.floor(i/2)];
		}
        this.heapList[i] = val;
    }
}


MinHeap.prototype.peek = function () {
    if (this.heapSize) {
        return this.heapList[1];
    }
}


// Bubble down
MinHeap.prototype.remove = function () {
    let min = this.heapList[1];
    let last = this.heapList[this.heapSize--];
    let child;
    for (var i = 1; i * 2 <= this.heapSize; i = child) {
        child = 2 * i;
        if (child + 1 <= this.heapSize && this.heapList[child + 1] < this.heapList[child]) {
            child++;
        }
        if (this.heapList[child] < last) {
            this.heapList[i] = this.heapList[child]
        } else {
            break;
        }
    }
    this.heapList[i] = last;
    return min;
}

function countMinConferenceRooms(intervals) {
    let minHeap = new MinHeap(Infinity);
    minHeap.insert(intervals[0][1]);
    for (let i = 1; i < intervals.length; i++) {
        if (minHeap.heapSize && intervals[i][0] >= minHeap.peek()) {
            let min = minHeap.remove();
        }
        minHeap.insert(intervals[i][1]);
    }
    return minHeap.heapSize;
}

var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    return countMinConferenceRooms(intervals);
};




// function countMinConfRooms(intervals) {
//     let conf = 1;
//     let max = 1;
//     let minEnd = intervals[0][1];
//     let minStart = intervals[0][0];
//     for (let i = 1; i < intervals.length; i++) {
//         if (intervals[i][0] < intervals[i - 1][1] && intervals[i][1] > intervals[i - 1][0]) {
//             if (minEnd >= intervals[i][1] && intervals[i][0]  > minEnd) {
//                 conf++;
//                 max = Math.max(conf, max);
//                 minEnd = Math.min(minEnd, intervals[i][1]);
//             }
//         } else {
//             conf = 1;
//             minEnd = intervals[i][1];
//         }
//     }
//     return max;
// }


