/**
 * @param {number[][]} mat
 * @return {number}
 */


var smallestCommonElement = function(mat) {
    let map = {};
    if (mat.length < 1)
        return -1;
    for (let i = 0; i < mat[0].length; i++) {
        map[mat[0][i]] = 1;
    }
    
    for (let i = 1; i < mat.length; i++) {
        for (j = 0; j < mat[i].length; j++) {
            if(map[mat[i][j]])
                map[mat[i][j]]++; 
        }
    }
    
    let result = Infinity;
    Object.keys(map).forEach((key) => {
        if (map[key] === mat.length && key < result) {
            result = key;
        }
    });
    if (result !== Infinity)
        return result;
    return -1;
};