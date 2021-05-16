/**
 * @param {string[]} words
 * @return {number}
 */


function findLongestChain(words) {
    words.sort((wordA, wordB) => wordA.length - wordB.length);
    let dp = new Map();
    let max = -Infinity;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let best = 0;
        for (let j = 0; j < word.length; j++) {
            let newWord = word.slice(0, j) + word.slice(j + 1, word.length);
            best = Math.max(best, (dp.get(newWord) || 0) + 1);
        }
        dp.set(word, best);
        max = Math.max(best, max);
    }
    return max;
}
var longestStrChain = function(words) {
    return findLongestChain(words);
};


