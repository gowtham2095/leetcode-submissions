/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function UnionFind(size) {
    this.size = size;
    this.parents = [];
    for (let i = 0; i < this.size; i++) {
        this.parents[i] = i;
    }
}

UnionFind.prototype.find = function(child) {
    if (child == this.parents[child])
        return child;
    else
        return this.parents[child] = this.find(this.parents[child]);
}

UnionFind.prototype.union = function (a, b) {
    this.parents[a] = b;
}



function kahnsCircuit(n, connections) {
    
    if (connections.length < n - 1)
        return -1;
    let uniFind = new UnionFind(n);
    let count = n;
    connections.forEach((connection) => {
        let a =  uniFind.find(connection[0]);
        let b =  uniFind.find(connection[1]);
        if ( a != b) {
            uniFind.union(a, b);
            count--;
        }
    });
    return count - 1;
}

var makeConnected = function(n, connections) {
    return kahnsCircuit(n, connections);
};