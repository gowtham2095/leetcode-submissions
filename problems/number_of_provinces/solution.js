/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function UnionFind(size) {
    this.parents = [];
    for (let i = 0; i < size; i++) {
       this.parents[i] = i; 
    }
}

UnionFind.prototype.find = function(s) {
    if (s == this.parents[s])
        return s;
    else
        return this.parents[s] = this.find(this.parents[s]);
}

UnionFind.prototype.union = function (a, b) {
    this.parents[a] = b;
}

UnionFind.prototype.uniqueComponents = function () {
  let set = new Set();
  for (let i = 0; i < this.parents.length; i++)
      set.add(this.find(i));
  return set.size;
}

function findNumberOfProvinces(isConnected) {
    let n = isConnected.length;
    let connectedComponents = new UnionFind(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j]) {
                let a = connectedComponents.find(i);
                let b = connectedComponents.find(j);
                if (a != b)
                    connectedComponents.union(a, b);
            }
        }
    }
    return connectedComponents.uniqueComponents();
}

var findCircleNum = function(isConnected) {
    return findNumberOfProvinces(isConnected);
};
//   0 1 2 3
// 0[1,0,0,1],
// 1[0,1,1,0],
// 2[0,1,1,1],
// 3[1,0,1,1]

//  0. 1. 2
// 0[[1,1,0],
// 1[1,1,0],
// 2[0,0,1]]