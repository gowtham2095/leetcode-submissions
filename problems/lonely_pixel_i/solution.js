/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    let m = picture.length;
    let n = picture[0].length;
    
    let rows = [];
    rows.length = m;
    rows.fill(0);
    
    let cols = [];
    cols.length = n;
    cols.fill(0);
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] === 'B') {
                rows[i]++;
                cols[j]++;
            }
        }
    }
    
    let lonelyBCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] == 1 && cols[j] == 1 && picture[i][j] === 'B') {
                lonelyBCount++;
            }
        }
    }
    
    return lonelyBCount;
};