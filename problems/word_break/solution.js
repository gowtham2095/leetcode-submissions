/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


function isWordInDict(s, wordSet) {
    if (s.length == 0)
        return true;
    for (let i = 0; i <= s.length; i++) {
        if (wordSet.has(s.slice(0, i)) && isWordInDict(s.slice(i, s.length), wordSet)) {
            return true;
        }
    }
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

    let wordSet = new Set(wordDict);
    // return isWordInDict(s, wordSet);
    return isWordBreakDP(s, wordSet);
    
};




