
var LogSystem = function() {
    this.logs = []
};

/** 
 * @param {number} id 
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
    this.logs.push({id, timestamp});
};

/** 
 * @param {string} start 
 * @param {string} end 
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(start, end, granularity) {
    let truncateMap = {
        "Year": 5,
        "Month": 8,
        "Day": 11,
        "Hour": 14,
        "Minute": 17,
        "Second": 20
    };
    let truncateIndex = truncateMap[granularity]; 
    let result = [];
    this.logs.forEach((log) => {
        if (log.timestamp.slice(0, truncateIndex) >= start.slice(0, truncateIndex) &&
            log.timestamp.slice(0, truncateIndex) <= end.slice(0, truncateIndex)) {
            result.push(log.id);
        }
    })
    return result;
};

/** 
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */