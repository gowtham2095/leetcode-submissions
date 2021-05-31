/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

function cowsAndBulls(secret, guess) {
    let A = 0;
    let B = 0;
    let bullMap = {};
    let bullIndex = new Set();
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            A++;
            bullIndex.add(i);
        }
        
        if (bullMap[secret[i]] == undefined) {
            bullMap[secret[i]] = 0;
        }
        if (!bullIndex.has(i))
            bullMap[secret[i]]++;
    }
    for (let i = 0; i < guess.length; i++) {
        if (!bullIndex.has(i) && bullMap[guess[i]]) {
            bullMap[guess[i]]--;
            B++;
        }
    }    
    return A + 'A' + B + 'B';
}
var getHint = function(secret, guess) {
    return cowsAndBulls(secret, guess);
};

// 1 8 0 7

// 7 8 1 0

// 1 1 2 3

// 0 1 1 1