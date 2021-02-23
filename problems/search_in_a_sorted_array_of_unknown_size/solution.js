/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    let end = 1; 
    while (reader.get(end) < target) {
              end = end << 1; 
    }
    let start = end >> 1;
    
    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        let middleElement = reader.get(mid);
        if (middleElement == target)
            return mid;
        else if (middleElement < target)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1
};