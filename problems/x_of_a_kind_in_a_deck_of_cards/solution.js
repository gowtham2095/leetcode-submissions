/**
 * @param {number[]} deck
 * @return {boolean}
 */
function findGcd(a, b) {
    if (a == b)
        return a;
    if (a > b) {
        return findGcd(a - b, b)
    } else {
        return findGcd(a, b - a);
    }
}

function isRightSplit(deck) {
    let cardCountMap = {};
    
    if (deck.length == 1)
        return false;
    for (let i = 0; i < deck.length; i++) {
        if (cardCountMap[deck[i]] == undefined)
            cardCountMap[deck[i]] = 0;
        cardCountMap[deck[i]]++;
    }
    let min = Infinity;

    
    let keys = Object.keys(cardCountMap);
    
    let prev = cardCountMap[keys[0]];
    for (let i = 1; i < keys.length; i++) {
        prev = findGcd(prev, cardCountMap[keys[i]]);
        if (prev == 1)
            return false;
    }
    return true;
}

var hasGroupsSizeX = function(deck) {
    return isRightSplit(deck);
};

