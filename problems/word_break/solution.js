/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


function isWordInDict(s, start, wordSet, dp) {
    if (dp.get(start) != undefined)
        return dp.get(start)
    if (start == s.length)
        return true;
    for (let i = 0; i <= s.length; i++) {
        if (wordSet.has(s.slice(start, i)) && isWordInDict(s, i, wordSet, dp)) {
            dp.set(start, true);
            return true;
        }
    }
    dp.set(start, false);
    return false;
}



function isWordBreakDP(s, wordSet) {
    let dp = [];
    dp.length = s.length + 1;
    dp.fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i ++) {
        for(let j = 0; j < i; j++) {
            let str = s.slice(j, i);
            if (dp[j] && wordSet.has(str)) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
}


var wordBreak = function(s, wordDict) {
    let dp = new Map();

    let wordSet = new Set(wordDict);
    return isWordInDict(s, 0, wordSet, dp);
    // return isWordBreakDP(s, wordSet);
    
};




