/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */



function formSentences(s, wordDict, result, str, dpMap) {
    if (s == '') {
        let finalStr = str.slice(0, str.length - 1);
        result.push(finalStr);
    }
    let word = '';
    let i = 0;
    for (let ch of s) {
         word += ch;
         i++;
         if (wordDict.has(word)) {
            formSentences(s.slice(i , s.length), wordDict, result, str + word + ' ', dpMap);
         }
    }
}

var wordBreak = function(s, wordDict) {
    let result = [];
    let wordSet = new Set(wordDict);
    formSentences(s, wordSet, result, '', {});
    return result;
};



