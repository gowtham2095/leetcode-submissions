/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */

function constructZigZag(v1, v2) {
    let result = [];
    let i = 0;
    let length = v1.length < v2.length ? v1.length : v2.length;
    let isV1 = true;
    while(i < length) {
        if (isV1) {
            result.push(v1[i]);
            isV1 = false;
        } else {
            result.push(v2[i]);
            isV1 = true;
            i++;
        }
    }
    
    if (v1.length < v2.length) {
        result = result.concat(v2.slice(i, v2.length));
    } else {
        result = result.concat(v1.slice(i, v1.length));
    }
    return result;
}

var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.zigZagList = constructZigZag(v1, v2);
    this.currentPtr = null;
    if (this.zigZagList.length) {
        this.currentPtr = 0;
    }
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    if (this.currentPtr == null )
        return false;
    return this.currentPtr == this.zigZagList.length ? false : true; 
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if (this.currentPtr < this.zigZagList.length) {
        let val = this.zigZagList[this.currentPtr];
        this.currentPtr++;
        return val;
    }
    
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/