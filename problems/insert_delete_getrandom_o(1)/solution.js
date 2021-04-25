/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.list = [];
    this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] != undefined)
        return false;
    this.list.push(val);
    this.map[val] = this.list.length - 1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let index = this.map[val];
    if (index == undefined)
        return false;
    let lastELement = this.list[this.list.length - 1];
    this.map[lastELement] = index;
    this.list[index] = lastELement;
    this.map[val] = undefined;
    this.list.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */