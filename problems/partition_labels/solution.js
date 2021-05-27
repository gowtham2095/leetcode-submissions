/**
 * @param {string} s
 * @return {number[]}
 */

function findLast(s) {
    let map = {};
    for (let l = 0; l < s.length; l++) {
        map[s[l]] = l;
    }
    let i = 0;
    let result = [];
    let currentMax = map[s[0]];
    let count = 1;
    i++;
    while(i < s.length) {
        if (i <= currentMax) {
            if (map[s[i]] > currentMax) {
                currentMax = map[s[i]];
            }
            count++;
        } else {
            result.push(count);
            count = 1;
            currentMax = map[s[i]];
        }
        i++;
    }
    if (count) {
        result.push(count);
    }
    return result;
}

var partitionLabels = function(s) {
    return findLast(s);
};
