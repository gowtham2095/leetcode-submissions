/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    let currentBuf = [];
    return function(buf, n) {
        let bufPtr = 0;
        while (n) {
            if (currentBuf.length == 0) {
                let read = read4(currentBuf);
                if (read.length == 0)
                    return buf.length;
            }
            buf.push(currentBuf.shift());
            n--;
        }
        // console.log(buf.length, buf);
        return buf.length;
    };
};