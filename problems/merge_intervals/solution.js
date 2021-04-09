/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function mergeIntervals(intervals) {
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let lastResult = result[result.length - 1];
        let left = intervals[i][0];
        let right = intervals[i][1];
        if (left <= lastResult[1] && right >= lastResult[0]) {
            result.pop();
            left = Math.min(lastResult[0], left);
            right = Math.max(lastResult[1], right);
        }
        result.push([left, right]);
    }
    return result;
}
var merge = function(intervals) {
    intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
    return mergeIntervals(intervals);
};