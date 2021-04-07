/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    result.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let resultLength = result.length - 1;
        if (intervals[i][0] <= result[resultLength][1] && intervals[i][1] >= result[resultLength][0]) {
            let resultLatest = result.pop();
            let left = Math.min(resultLatest[0], intervals[i][0]);
            let right = Math.max(resultLatest[1], intervals[i][1]);
            result.push([left, right]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

var merge = function(intervals) {
    return mergeIntervals(intervals);
};



