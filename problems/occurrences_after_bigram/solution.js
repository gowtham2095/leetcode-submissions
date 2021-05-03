/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */



function findOccs(text, first, second) {
    let words = text.split(' ');
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i] == first && words[i + 1] == second) {
            if (i + 2 < words.length) {
                result.push(words[i + 2]);
            }
        }
    }
    return result;
}

var findOcurrences = function(text, first, second) {
    return findOccs(text, first, second);
};









