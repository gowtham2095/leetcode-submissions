/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */


function replaceStringWithTarget(S, indexes, sources, targets) {
    let map = {};
    for (let i = 0; i < indexes.length; i++) {
        let str = S.slice(indexes[i]);
        if (str.indexOf(sources[i]) == 0) {
            map[indexes[i]] = {
                end: indexes[i] + sources[i].length,
                val: targets[i]
            }
        }
    }
    let result = '';
    for (let i = 0; i < S.length; i++) {
        if (map[i] != undefined) {
            let endVal = map[i].end - 1;
            let val = map[i].val
            while (i < endVal) {
                i++;
            }
            result += val;
        } else {
            result += S[i];
        }
    }
    return result; 
}



var findReplaceString = function(S, indexes, sources, targets) {
    return replaceStringWithTarget(S, indexes, sources, targets);
};
