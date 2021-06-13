/**
 * @param {string[]} words
 * @return {number[][]}
 */


function isValidPali(word) {
    let i = 0;
    let j = word.length - 1;
    while(i < j) {
        if (word[i] != word[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var palindromePairs = function(words) {
    let result = [];
    let n = words.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i != j) {
                let word = words[i] + words[j];
                if (isValidPali(word)) {
                    result.push([i, j]);
                }
                word = words[j] + words[i];
                if (isValidPali(word)) {
                    result.push([j, i]);
                }
            }
        }
    }
    return result;
};



// ["abcd","dcba","lls","s","sssll"]

// ['a', 'a']
// abcd