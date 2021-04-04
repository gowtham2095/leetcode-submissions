
var MyCalendar = function() {
    this.events = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    
    for (let i = 0; i < this.events.length; i++) {
        
        if (start < this.events[i][1] && end > this.events[i][0]) {
            return false;
        }
        
    }
    this.events.push([start, end]);
    this.events.sort((a, b) => a[0] - b[0]);
    return true;
};

