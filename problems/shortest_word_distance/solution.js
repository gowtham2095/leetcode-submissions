/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {

    
    let p1 = -1, p2 = -1;
    let min = Infinity;
    for (let i = 0; i < words.length; i++) {
        if (words[i] == word1)
            p1 = i;
        if (words[i] == word2)
            p2 = i;
        if (p1 !== -1 && p2 !== -1)
            min = Math.min(min, Math.abs(p1-p2))
    }
    
    return min;
    
    
};

var mySolution = function(words, word1, word2) {
        let min = {
        [word1]: null,
        [word2]: null,
        currentMin: Infinity,
        currentSearch: null
    }
    for (let i = 0; i < words.length; i++) {
        if (!min.currentSearch) {
            if (words[i] === word1) {
                min[word1] = i;
                min.currentSearch = word2;
            } else if (words[i] === word2) {
                min[word2] = i;
                min.currentSearch = word1;
            }
        } else {
            if (min.currentSearch === word2) {
                if (words[i] == word2) {
                    min.currentMin = Math.min(Math.abs(i-min[word1]), min.currentMin);
                    min.currentSearch = word1;
                    min[word2] = i;
                } else if (words[i] === word1) {
                    min[word1] = i;
                }
            } else if (min.currentSearch === word1) {
                console.log('tes', words[i]);
                if (words[i] == word1) {
                        min.currentMin = Math.min(min.currentMin, Math.abs(i-min[word2]));
                        min.currentSearch = word2;
                        min[word1] = i;
                } else if (words[i] === word2) {
                    min[word2] = i;
                }
            }
        }
    }
    return min.currentMin;
}