/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    let timeList = this.timeMap.get(key);
    if (timeList == undefined) {
        this.timeMap.set(key, []);
        timeList = this.timeMap.get(key);
    }
    timeList.push({timestamp, value});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let left = 0;
    let timeList = this.timeMap.get(key);
    if (timeList == undefined || timeList[0].timestamp > timestamp) {
        return '';
    }
    let right = timeList.length;
    while (left < right) {
        let middle = Math.floor((left + right)/2);
        let currentVal = timeList[middle];
        // console.log(left, right, middle, currentVal);
        if (currentVal.timestamp <= timestamp) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return timeList[left - 1].value;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */






// this.map[key] = []
