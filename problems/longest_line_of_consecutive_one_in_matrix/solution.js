/**
 * @param {number[][]} M
 * @return {number}
 */

function longest1s(mat) {
    let rowLength = mat.length;
    let colLength = rowLength && mat[0].length;
    let max = 0;
    let count = 0;
    
    if (rowLength == 0 || colLength == 0)
        return 0;
    
    // horizontal
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (mat[i][j] == 1) {
                let l = i, k = j;
                while(k < colLength && mat[l][k] != 0) {
                    count++;
                    k++;
                }
                max = Math.max(count, max);
                count = 0;
            }
        }
    }
    
    //veritcal
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (mat[i][j] == 1) {
                let l = i, k = j;
                while(l < rowLength && mat[l][k] != 0) {
                    count++;
                    l++;
                }
                max = Math.max(count, max); 
                count = 0;
            }
        }
    }
    
    // diagnol
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (mat[i][j] == 1) {
                let l = i, k = j;
                while(l < rowLength && k < colLength && mat[l][k] != 0) {
                    count++;
                    l++;
                    k++;
                }
                max = Math.max(count, max); 
                count = 0;
            }
        }
    }
    
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (mat[i][j] == 1) {
                let l = i, k = j;
                while(l < rowLength && k >= 0 && mat[l][k] != 0) {
                    count++;
                    l++;
                    k--;
                }
                max = Math.max(count, max);
                count = 0;
            }
        }
    }
    
    return max;
}

var longestLine = function(M) {
    return longest1s(M);
};



// 1) Go by row
// 2) Go by column
// 3) Go by diagnol
// 4) Go by anti diagnol

// return max count
