/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function findCommonSubsequence(text1, text2) {
    let dpArray = [];
    for (let m = 0; m <= text1.length; m++) {
        dpArray[m] = [];
        for(let n = 0; n <= text2.length; n++) {
            dpArray[m][n] = 0;
        }
    }
    for (var i = 1; i <= text1.length; i++) {
        for(var j = 1; j <= text2.length; j++) {
            // let count = 0;
            if (text1[i - 1] == text2[j - 1]) {
                // count = 1
                dpArray[i][j] = 1 + dpArray[i-1][j-1];
            } else {
                dpArray[i][j] = Math.max(dpArray[i-1][j], dpArray[i][j-1]);
            }
        }
    }
    // console.log(dpArray, i, j);
    return dpArray[i - 1][j - 1];
}
var longestCommonSubsequence = function(text1, text2) {
    return findCommonSubsequence(text1, text2);
};



//     '' a   c   e
// ''  0  0   0   0
// a   0  1   1   1
// b   0  1   1   1
// c   0  1   2   2    
// d   0  1   2   2
// e   0  1   2   3