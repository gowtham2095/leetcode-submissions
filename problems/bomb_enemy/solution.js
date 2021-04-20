/**
 * @param {character[][]} grid
 * @return {number}
 */

var maxKilledEnemies = function(grid) {
       if(grid == null || grid.length == 0 ||  grid[0].length == 0) return 0;
    var max = 0;
    var row = 0;
    var col = new Array(grid[0].length);
    col.fill(0);
    for(var i = 0; i<grid.length; i++){
        for(var j = 0; j<grid[0].length;j++){
            if(grid[i][j] == 'W') continue;
            if(j == 0 || grid[i][j-1] == 'W'){
                 row = killedEnemiesRow(grid, i, j);
            }
            if(i == 0 || grid[i-1][j] == 'W'){
                 col[j] = killedEnemiesCol(grid,i,j);
            }
            if(grid[i][j] == '0'){
                max = (row + col[j] > max) ? row + col[j] : max;
            }
        }

    }
    
    return max;   
};

//calculate killed enemies for row i from column j
var killedEnemiesRow = function(grid, i, j){
    var num = 0;
    while(j <= grid[0].length-1 && grid[i][j] != 'W'){
        if(grid[i][j] == 'E') num++;
        j++;
    }
    return num;
}
//calculate killed enemies for  column j from row i
var killedEnemiesCol = function( grid, i, j){
    var num = 0;
    while(i <= grid.length -1 && grid[i][j] != 'W'){
        if(grid[i][j] == 'E') num++;
        i++;
    }
    return num;
}