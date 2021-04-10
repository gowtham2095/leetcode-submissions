/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

function constructGraph(n, headID, manager, informTime) {
    let map = {};
    for (let i = 0; i < manager.length; i++) {
        if (map[manager[i]] == undefined) {
            map[manager[i]] = [];
        }
        map[manager[i]].push(i);
    }
    return map;
}

function computeDfs(dfsMap, headID, manager, informTime) {
    return dfs(dfsMap, headID, informTime);
}

function dfs(dfsMap, headID, informTime) {
    let neighbors = dfsMap[headID];
    if (!neighbors) {
        return 0;
    }
    let max = 0;
    let tempMax;
    for(let i = 0; i < neighbors.length; i++) {
        tempMax = informTime[headID] + dfs(dfsMap, neighbors[i], informTime);
        max = Math.max(tempMax, max);
    }
    return max;
}

var numOfMinutes = function(n, headID, manager, informTime) {
    let dfsMap = constructGraph(n, headID, manager, informTime);
    return computeDfs(dfsMap, headID, manager, informTime);
};





// n = 6


// headId = 2

// manager = [2, 2, -1, 2, 2, 2]

// InformTime = [0, 0, 1, 0, 0, 0]



// n = 15

// headId = 0



// 0: [1, 2]
// 1: [3, 4]
// 2: [5, 6]
// 3: [7, 8]
// 4: [9, 10]
// 5: [11, 12]
// 6: [13, 14]

// [-1,0,0,1,1,2,2,3,3,4,4, 5, 5, 6, 6]
//   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14



// [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]

//                           0

//                     1.          2
                
//                 3       4    5      6

        
            




