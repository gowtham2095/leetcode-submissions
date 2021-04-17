/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

function findDistanceByFinger(keyboard, word) {
    let keyMap = {};
    for (let i = 0; i < keyboard.length; i++) {
        keyMap[keyboard[i]] = i;
    }
    
    let prev = 0;
    let totalDistance = 0;
    for (let ch of word) {
        let currentPos = keyMap[ch];
        totalDistance += Math.abs(prev - currentPos);
        prev = currentPos;
    }
    
    return totalDistance;
    
}

var calculateTime = function(keyboard, word) {
    return findDistanceByFinger(keyboard, word);
};



// 1 map [char] : index


