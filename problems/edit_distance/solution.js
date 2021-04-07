/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */


function diff(word1, word2, i, j) {
    if (word1[i - 1] == word2[j - 1])
        return 0;
    else 
        return 1;
}



function findMinEdit(w1, w2) {
    let m = w1.length; 
    let n = w2.length;
    let E = [];
    for (let i = 0; i <= m; i++) {
        E.push([]);
        E[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        E[0][j] = j;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            E[i][j] = Math.min(1 + E[i - 1][j], 1 + E[i][j - 1], diff(w1, w2, i, j) + E[i-1][j-1]);
        }
    }
    // console.log(E)
    return E[m][n]; 
}

var minDistance = function(word1, word2) {
    return findMinEdit(word1, word2);
};