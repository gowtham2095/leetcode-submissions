/**
 * @param {number[][]} stones
 * @return {number}
 */

function countConnectedComponents(stones) {
   let visitedSet = new Set();
   let count = 0;
   for (let i = 0; i < stones.length; i++) {
        if (!visitedSet.has(stones[i])) {
            dfs(stones[i], stones, visitedSet);
            count++;
        }
   }
    
    return stones.length - count;
}


function dfs(stone, stones, set) {
    set.add(stone);
    for (let i = 0; i < stones.length; i++) {
        if (!set.has(stones[i])) {
            if (stones[i][0] == stone[0] || stones[i][1] == stone[1]) {
                dfs(stones[i], stones, set);
            }
        }
    }
}


var removeStones = function(stones) {
    return countConnectedComponents(stones);
};



// [0,0],[0,1],[1,0],[1,2],[2,1],[2,2]



// 0, 0 -> 0, 1,    1, 0
// 0, 1 -> 0, 0


// 1, 0 -> 0, 1     0, 0
// 0, 1 -> 1, 0     2, 1



// 2, 1 -> 2, 2      0, 1
// 2, 2 -> 2, 1      1, 2








