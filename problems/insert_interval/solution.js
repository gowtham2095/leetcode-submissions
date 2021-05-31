/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// [[1,3],[6,9]] 
//   0.    1     2
// [2,5]

function binarySearch(intervals, newInterval) {
    let left = 0;
    let right = intervals.length;
    while(left < right) {
        let middle = left + Math.floor((right - left)/2);
        if (newInterval[0] < intervals[middle][0]) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
}

function performOverlap(result, left, right) {
    let lastResult = result[result.length - 1];
    if (left <= lastResult[1] && right >= lastResult[0]) {
        result.pop();
        left = Math.min(lastResult[0], left);
        right = Math.max(lastResult[1], right);
    }
    result.push([left, right]);
}

function mergeIntervals(intervals, newInterval) {
    let findPos = binarySearch(intervals, newInterval);
    // console.log(findPos);
    if (findPos == intervals.length) {
        intervals.push(newInterval);
    }
    let result = findPos == 0 ? [newInterval] : [intervals[0]];
    if (findPos == 0 && intervals.length) {
        performOverlap(result, intervals[0][0], intervals[0][1]);
    }
    for (let i = 1; i < intervals.length; i++) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        if (i < findPos)
            result.push(intervals[i]);
        if (i == findPos) {
            let newLeft = newInterval[0];
            let newRight = newInterval[1];
            performOverlap(result, newLeft, newRight);
        }
        performOverlap(result, left, right);
        
    }
    return result;
}

var insert = function(intervals, newInterval) {
    return mergeIntervals(intervals, newInterval);
};