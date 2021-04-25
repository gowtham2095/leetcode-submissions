/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

function sortString(S, T) {
    let sortOrder = {};
    let index = 1;
    for (let ch of S) {
        sortOrder[ch] = index;
        index++;
    }
    
    let str = T.split('').sort((a, b) => {
        let first = sortOrder[a] || Infinity;
        let second = sortOrder[b] || Infinity
        return first - second;
    }).join('');
    return str;
}

var customSortString = function(S, T) {
    return sortString(S, T);
};


// c: 0
// b: 1
// a: 2

// abcd