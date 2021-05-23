/**
 * @param {number[][]} edges
 * @return {number[]}
 */

function UnionFind(size) {
    this.parents = [];
    this.size = size;
    for (let i = 1; i <= this.size; i++) {
        this.parents[i] = i;
    }
}

UnionFind.prototype.find = function(child) {
    if (child == this.parents[child])
        return child;
    return this.parents[child] = this.find(this.parents[child]);
}


UnionFind.prototype.union = function(a, b) {
    this.parents[a] = b;
}


function getExtraEdge(edges) {
    let disjointSet = new UnionFind(edges.length);
    for (let edge of edges) {
        let [a, b] = edge;
        let parentA = disjointSet.find(a);
        let parentB = disjointSet.find(b);
        // console.log(parentA, parentB, disjointSet.parents);
        // console.log(parentB);
        if (parentA == parentB) {
            return [a, b]
        } else {
            disjointSet.union(parentA, parentB);
        }
    }
}


// function getCycleEdges(edges) {
//     let disjointSet = new UnionFind(edges.length);
//     let a = disjointSet.find(edges[0][0]);
//     let b = disjointSet.find(edges[0][1]);
//     disjointSet.union(a, b);
//     let commonSet = disjointSet.find(a);
//     console.log(commonSet);
//     let result = [];
//     for (let i = 1; i < edges.length; i++) {
//         let a = disjointSet.find(edges[i][0]);
//         let b = disjointSet.find(edges[i][1]);
//         console.log(a, b);
//         if (a == commonSet && b == commonSet) {
//             result.push([a, b]);
//         } else if (a != b) {
//             disjointSet.union(a, b);
//         }
//     }
//     return result[result.length - 1];
// }

var findRedundantConnection = function(edges) {
    return getExtraEdge(edges);
};


// number of nodes 5




// 5



//     0  1
//   0 1, 2
//   1 1, 3
//   2 2, 3



// 1 -> 2


// 1 -> 3

// 2 -> 3


// [[1,2], [2,3], [3,4], [1,4], [1,5]]


// 1,2,3, 4

// 1 -> 2


// 2 -> 3

// 3 -> 4


// 1, 5