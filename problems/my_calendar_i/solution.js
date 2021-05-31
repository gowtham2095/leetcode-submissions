
// My solution

// var MyCalendar = function() {
//     this.events = []
// };

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
// MyCalendar.prototype.book = function(start, end) {
//     for (let i = 0; i < this.events.length; i++) {
//         if (start < this.events[i][1] && end > this.events[i][0]) {
//             return false;
//         }
//     }
//     this.events.push([start, end]);
//     return true;
// };



// From discuss

var MyCalendar = function() {
    this.root = null;
};

var Node = function (start, end) {
    this.start = start;
    this.end = end;
    this.left = null;
    this.right = null;
};

Node.prototype.insert = function (node) {
    if (node.start >= this.end) {
        if (this.right === null) {
            this.right = node;
            return true;    
        }
        return this.right.insert(node);
    } else if (node.end <= this.start) {
        if (this.left === null) {
            this.left = node;
            return true;
        }
        return this.left.insert(node);
    } else {
        return false;
    }
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    var newNode = new Node(start, end);
    if (this.root === null) {
        this.root = newNode;
        return true;
    } else {
        return this.root.insert(newNode);
    }
};

