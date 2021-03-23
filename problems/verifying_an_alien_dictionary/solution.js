/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */



function isBigger(a, b, map) {
    let aLen = a.length;
    let bLen = b.length;
    let i = 0; 
    let j = 0
    while(i < aLen && j < bLen) {
        if (map[a[i]] > map[b[j]]) {
            return false;
        } else if (map[a[i]] < map[b[j]]) {
            return true;
        }
        i++;
        j++;
    }
    return aLen <= bLen;
}

var isAlienSorted = function(words, order) {
    
    let map = {};
    
    let i = 0;
    while(i < order.length) {
        map[order[i]] = i;
        i++;
    }
    let prev = words[0];
    for (let i = 1; i < words.length; i++) {
        if (!isBigger(prev, words[i], map)) {
            return false;
        }
        prev = words[i];
    }
    return true;
    
};
