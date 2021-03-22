/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

function wordCompare(word1, word2) {
    let i = 0;
    let j = 0;
    
    while (i < word1.length && j < word2.length) {
        
        let word1Len = word1[i].length;
        let word2Len = word2[j].length;
        if (word1Len === word2Len) {
            if (word1[i] != word2[j]) {
                return false;
            }
            i++;
            j++;
        } else if (word1Len < word2Len) {
            if (word2[j].indexOf(word1[i]) != 0) {
                return false;
            }
            i++;
            word2[j] = word2[j].slice(word1Len, word2Len);
        } else {
            console.log(word1[i].indexOf(word2[j]));
            if (word1[i].indexOf(word2[j]) != 0) {
                return false;
            }
            j++;
            word1[i] = word1[i].slice(word2Len, word1Len);
        }
    }
    return i == word1.length && j == word2.length;
}

var arrayStringsAreEqual = function(word1, word2) {
    return wordCompare(word1, word2);
};



