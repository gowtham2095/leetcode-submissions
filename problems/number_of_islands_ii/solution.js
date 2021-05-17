/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */

function computeDfs(islands, row, col) {
    if (row < 0 || col < 0 || row > islands.length - 1 || col > islands[0].length - 1 || islands[row][col] == '0') {
        return;
    }
    islands[row][col] = '0';
    computeDfs(islands, row + 1, col);
    computeDfs(islands, row, col + 1);
    computeDfs(islands, row - 1, col);
    computeDfs(islands, row, col - 1);
}


function countIslands(islandsCopy, m, n) {
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (islandsCopy[i][j] == '1') {
                count++;
                computeDfs(islandsCopy, i, j);
            }
        }
    }
    return count;
}

function makeIslandsCopy(islands, m, n) {
    let newIslands = [];
    for (let i = 0; i < m; i++) {
        newIslands[i] = [];
        for (let j = 0; j < n; j++) {
            newIslands[i][j] = islands[i][j];
        }
    }
    return newIslands;
}



function canFormIsland(islands, row, col) {
    let top = islands[row - 1] == undefined ||  islands[row - 1] && islands[row - 1][col] != '1';
    let bottom = islands[row + 1] == undefined || islands[row + 1]  && islands[row + 1][col] != '1';
    let left = islands[row][col - 1] != '1';
    let right = islands[row][col + 1] != '1';
    return top && bottom && left && right
}

// var numIslands2 = function(m, n, positions) {
//     let islands = [];
//     for (let i = 0; i < m; i++) {
//         islands[i] = [];
//         for (let j = 0; j < n; j++) {
//             islands[i][j] = '0';
//         }
//     }
//     let result = [];
//     let count = 0;
//     for (let position of positions) {
//         let [row, col] = position;
//         islands[row][col] = '1';
//         if (canFormIsland(islands, row, col)) {
//             count++;
//         }
//         // let newIslands = makeIslandsCopy(islands, m, n);
//         // console.log(newIslands);
//         // let count = countIslands(newIslands, m, n);
//         // console.log(count);
//         result.push(count);
//     }
//     return result;
// };


var numIslands2 = function(m, n, positions) {
    if (m === 0 || n === 0) return 0;
    let grid = new Array(m).fill().map(() => new Array(n).fill(0));
    let parent = {};
    const UnionFind = function(m,n){
        let size = {};
        this.count = 0;

        this.add = (i,j) => {
            if (grid[i][j]===0){
                let id = `${i}_${j}`
                parent[id] = id;
                size[id] = 1;
                grid[i][j]=1;
                this.count++;
            }
        }

        this.find = (x) => {
            if (parent[x] === x) return x;
            parent[x] = this.find(parent[x]);
            return parent[x];
        }

        this.union = (x, y) => {
            let rootX = this.find(x);
            let rootY = this.find(y);

            if (rootX === rootY) return;
            if (size[rootX] > size[rootY]){
                size[rootX] += size[rootY];
                parent[rootY] = rootX;
            }else{
                size[rootY] += size[rootX];
                parent[rootX] = rootY;
            }
            this.count--;
        }
    }

    const UF = new UnionFind(m,n);
    const DIRS = [[1,0],[-1,0],[0,1],[0,-1]];
    let result = [];
    let rootMap = new Map();
    for (let position of positions){
        let [x, y] = position;
        let id = `${x}_${y}`;
        UF.add(x,y);
        for (let dir of DIRS){
            let nx = x+dir[0];
            let ny = y+dir[1];
            let nId = `${nx}_${ny}`
            if (nx>=0 && nx<m && ny>=0 && ny<n){
                if (grid[nx][ny] === 1) {
                    UF.union(id, nId);
                }
            }
        }
        result.push(UF.count)    
    
    }
    return result;
};


// [[0,0],[1,1],[0,1]]

// 1 1
// 1 1











// 1 1 0
// 0 0 1
// 0 1 0

