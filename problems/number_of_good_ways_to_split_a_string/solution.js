/**
 * @param {string} s
 * @return {number}
 */

function sameLength(map1 = {}, map2 = {}) {
    return Object.keys(map1).length == Object.keys(map2).length;
}

function insertIntoMap(map = {}, character) {
    if (map[character] == undefined) {
        map[character] = 0;
    }
    map[character]++;
}

function removeFromMap(map = {}, character) {
    map[character]--;
    if (map[character] == 0)
        delete map[character];
}

function findGoodSplits(s) {
    let leftMap = {};
    let rightMap = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        insertIntoMap(rightMap, s[i]);
    }
    let i = 0;
    while (i < s.length) {
        insertIntoMap(leftMap, s[i])
        removeFromMap(rightMap, s[i]);
        if (sameLength(leftMap, rightMap))
            count++;
        i++;
    }
    return count;
}

var numSplits = function(s) {
    return findGoodSplits(s);
};