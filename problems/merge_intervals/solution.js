/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] -b[0])
    let result = [];
    let lastElement;
    intervals.forEach((interval) => {
        if (result.length === 0 || (result.length && result[result.length -1][1] < interval[0])) {
            result.push(interval);
        } else {
            lastElement = result.pop();
            lastElement[1] = Math.max(lastElement[1], interval[1]);
            result.push(lastElement);
        }
    })
    return result;
};