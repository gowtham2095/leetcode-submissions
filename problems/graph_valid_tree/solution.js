/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function union(p1, p2, parent) {
    parent[p2] = p1;
}

function find(parent, i) {
    if (i == parent[i])
        return i;
    return parent[i] = find(parent, parent[i]);
}

function constructUnAndFind(edges, parent, count) {
    for(let edge of edges) {
       let a = find(parent, edge[0]);
       let b = find(parent, edge[1]);
       // console.log(a, b)
       if (a != b) {
           union(a, b, parent);
           count--;
       } else {
           return false
       }
    }
    return count == 1;
}

var validTree = function(n, edges) {
    let parent = [];
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    return constructUnAndFind(edges, parent, n);
    // console.log(count)
    // let nodeSet = new Set();
    // let parentEle = find(parent, 0);
    // nodeSet.add(parentEle);
    // for (let i = 1; i < n; i++) {
    //     parentEle = find(parent, i);
    //     if (!nodeSet.has(parentEle)) {
    //         return false;
    //     }
    // }
    // return true;
};

// 0, 1, 2, 3

// 3

// [[0,1],[0,2],[0,3],[1,4]]



// 0, 1, 2, 3, 4


// 0 -> 1

// 0 -> 2

// 0 -> 3

// 1 -> 4


// 0 -> 1, 2, 3

// [[0,1],[1,2],[2,3],[1,3],[1,4]]

// 0, 1, 2, 3, 4

// 0, 0, 1, 2, 1, 

    
// 0 -> 1

// 1 -> 2

// 2 -> 3

// 1 -> 3

// 1 -> 4


// 0, 1
// 1, 2
// 2, 3
// 1, 3
// 1, 4

//                 0
//             1   

//         2       3   4
    
//     3



// 4
// [[2,3],[1,2],[1,3]]


//        1 ->  2 -> 3






