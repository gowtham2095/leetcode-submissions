/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

function cowsAndBulls(secret, guess) {
    let A = 0;
    let B = 0;
    let bullMap = {};
    let cowIndex = new Set();
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            A++;
            cowIndex.add(i);
        }
        
        if (bullMap[secret[i]] == undefined) {
            bullMap[secret[i]] = 0;
        }
        if (!cowIndex.has(i))
            bullMap[secret[i]]++;
    }
    for (let i = 0; i < guess.length; i++) {
        if (!cowIndex.has(i) && bullMap[guess[i]]) {
            bullMap[guess[i]]--;
            B++;
        }
    }    
    return A + 'A' + B + 'B';
}
var getHint = function(secret, guess) {
    return cowsAndBulls(secret, guess);
};

