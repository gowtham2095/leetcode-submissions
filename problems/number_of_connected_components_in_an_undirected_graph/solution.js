/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

function UnionFind(num) {
    this.parent = []
    for (let i = 0; i < num; i++) {
        this.parent[i] = i;
    }
}

UnionFind.prototype.find = function(a) {
    if (this.parent[a] == a)
        return a;
    return this.parent[a] = this.find(this.parent[a]);
}

UnionFind.prototype.union = function (a, b) {
    this.parent[a] = b;
}

function countComponents(n, edges) {
    let dsa = new UnionFind(n);
    let count = n;
    for (let edge of edges) {
        let edgeA = dsa.find(edge[0]);
        let edgeB = dsa.find(edge[1]);
        if (edgeA != edgeB) {
            dsa.union(edgeA, edgeB);
            count --
        }
    }
    // let countSet = new Set();
    // for (let i = 0; i < dsa.parent.length; i++) {
    //     countSet.add(dsa.find(dsa.parent[i]));
    // }
    return count;
}


// var countComponents = function(n, edges) {
//     let allNodeSet = new Set();
//     edges.forEach((edge) => {
//        if (edge[0] > edge[1]) {
//            let temp = edge[0];
//            edge[0] = edge[1];
//            edge[1] = temp;
//        }  
//      allNodeSet.add(edge[0]);
//      allNodeSet.add(edge[1]);   
//     });
//     let count = 0;
//     console.log(allNodeSet);
//     for(let i = 0; i < n; i++) {
//         if (!allNodeSet.has(i)) {
//             count++;
//         }
//     }
    
//     console.log(count);
    
//     edges.sort((a, b) => a[0] - b[0]);
//     let isEdgePresent = new Map()
//     let resultArr = [];
//     edges.forEach((edge) => {
        
//         if (isEdgePresent.has(edge[0]) || isEdgePresent.has(edge[1])) {
//             let indexArr = isEdgePresent.has(edge[0]) ? isEdgePresent.get(edge[0]) : isEdgePresent.get(edge[1]);
//             let setOfGroup = resultArr[indexArr];
//             setOfGroup.add(edge[0]);
//             setOfGroup.add(edge[1]);
//             isEdgePresent.set(edge[0], indexArr);
//             isEdgePresent.set(edge[1], indexArr);
//         } else {
//             let newIndex = resultArr.length;
//             let set = new Set();
//             set.add(edge[0]);
//             set.add(edge[1]);
//             isEdgePresent.set(edge[0], newIndex);
//             isEdgePresent.set(edge[1], newIndex);
//             resultArr.push(set);
//         }
        
//     });
    
//     return resultArr.length + count;
// };