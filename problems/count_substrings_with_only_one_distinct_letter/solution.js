/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    if (S.length === 0)
        return 0;
    let output = 0;
    let currentChar, prevChar = S[0];
    let count = 1;
    for (let i = 1; i < S.length; i++) {
        currentChar = S.charAt(i);
        if (currentChar === prevChar) {
            count++;
        } else {
            output += ((count * (count - 1)) / 2) + count;
            // console.log(output);
            count = 1;
        }
        prevChar = currentChar;
    }
    
    output += ((count * (count - 1)) / 2) + count;
    return output;
    
};