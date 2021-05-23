/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

function formGraph(n, edges) {
    let graph = [];
    for (let i = 0; i < n; i++) {
        graph[i] = [];
        for (let j = 0; j < n; j++) {
            graph[i][j] = 0;
            if (i != j) {
                graph[i][j] = Infinity;
            }
        }
    }
    for (let edge of edges) {
        let [i, j, cost] = edge;
        graph[i][j] = cost;
        graph[j][i] = cost;
    }
    return graph;
}

// Floyd Warshall Algorithm - All pairs shortest path using O(n^3)
function getFloydGraph(graph, n) {
    let costGraph = [];
    for (let i = 0; i < n; i++) {
        costGraph[i] = [];
        for (let j = 0; j < n; j++) {
            costGraph[i][j] = graph[i][j];
        }
    }
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                costGraph[i][j] = Math.min(costGraph[i][j], costGraph[i][k] + costGraph[k][j]);
            }
        }
    }
    return costGraph;
}


function findMinCity(graph, distanceThreshold, n) {
    let min = Infinity;
    let minIndex = -1;
    let count = 0;
    for (let i = 0; i < n; i++) {
        count = 0;
        for (let j = 0; j < n; j++) {
            if (i != j && graph[i][j] <= distanceThreshold) {
                count++;
            }
        }
        if (count <= min) {
            min = count;
            minIndex = i;
        }
    }
    return minIndex;
}

var findTheCity = function(n, edges, distanceThreshold) {
    let graph = formGraph(n, edges);
    let floydGraph = getFloydGraph(graph, n);
    return findMinCity(floydGraph, distanceThreshold, n);
};
















"Perform dijstra's on each source and filter the list using threshold and check for the city with the smallest set"





