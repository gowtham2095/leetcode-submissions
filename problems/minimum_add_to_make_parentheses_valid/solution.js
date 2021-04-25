/**
 * @param {string} S
 * @return {number}
 */


// 7 mins

function findMinAddToMakeValid(s) {
    if (s.length == 0)
        return 0;
    let count = 0;
    let stackCount = 0;
    let i = 0;
    while(i < s.length) {
        if (s[i] == '(') {
            stackCount++;
        } else {
            if (stackCount == 0) {
                count++;
            } else {
                stackCount--;
            }
        }
        i++;
    }
    return count + stackCount;
}

var minAddToMakeValid = function(S) {
    return findMinAddToMakeValid(S);
};

