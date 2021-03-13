/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
// A minimum spanning tree is required to solve. It is similar to network cables problem.
// We can solve it using the Kruskal algorithm which is nothing but using disjoint set ADT with Union and find algorithm



var minimumCost = function(N, connections) {
    let n = N;
    let parents = [];
    
    for (let i = 0; i <= N; i++) {
        parents.push(i);
    }
    
    function Union(rootA, rootB) {
        if (rootA !== rootB) {
            parents[rootA] = rootB;
            n--
        }
         
    }
    
    function find(a) {
        if (a == parents[a]) {
            return parents[a];
        } else {
            return parents[a] = find(parents[a]);
        }
    }
    
    connections.sort((a, b) => a[2] - b[2]);
    let result = 0;
    for (let i = 0; i < connections.length; i++) {
        let [a, b, cost] = connections[i];
        let rootA = find(a);
        let rootB = find(b);
        
        if (rootA !== rootB) {
            result += cost;
            Union(rootA, rootB);
            if (n === 1) {
                return result;
            }
        }
    }
    
    return -1;
};




// [1], [2], [3]

// 0, 0, 0

// // [2, 3, 1]

// // 1, 2 3

// // [1, 2, 5]

// // 1 2 3

// // [1, 3, 6]
