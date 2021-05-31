/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
function findFitCount(sentence, rows, cols) {
    let currentRow = 0;
    let currentCol = 0;
    let count = 0;
    let ptr = 0;
    while (currentRow < rows) {
        while (currentCol + sentence[ptr].length <= cols) {
            currentCol += sentence[ptr].length + ((currentCol != cols) ? 1 : 0);
            ptr++;
            if (ptr == sentence.length) {
                count++;
                ptr = 0;
            }
        }
        currentCol = 0;
        currentRow++;
    }
    return count;
}

var wordsTyping = function(sentence, rows, cols) {
    return findFitCount(sentence, rows, cols);
};