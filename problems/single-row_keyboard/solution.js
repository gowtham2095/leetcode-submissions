/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let keyboardMap = {};
    keyboard.split('').forEach((key, index) => {
       keyboardMap[key] = index; 
    });
    if (word.length < 1)
        return 0;
    let distanceTravelled = 0;
    let currentIndex = 0;
    let nextIndex = 0;
    for (let i = 0; i < word.length; i++) {
        nextIndex = keyboardMap[word[i]];
        distanceTravelled = distanceTravelled + Math.abs(currentIndex - nextIndex);
        currentIndex = nextIndex;
    }
    return distanceTravelled;
};