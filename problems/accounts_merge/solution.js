/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */


// function UnionFind(size) {
//     this.parent = []
//     this.size = size;
//     for (let i = 0; i < size; i++) {
//         this.parent[i] = i;
//     }
// }

// UnionFind.prototype.union = function(node1, node2) {
//     this.parent[node1] = node2;
// }

// UnionFind.prototype.find = function (node1) {
//     if (this.parent[node1] == node1)
//         return node1;
//     else 
//         return this.parent[node1] = this.find(this.parent[node1]);
// }

// function mergeAccounts() {
//     let emailToIDMap = {};
//     let emailToNameMap = {};
    
//     for (let i = 0; i)
// }


// var accountsMerge = function(accounts) {
//     // return mergeAccount(accounts);
//     return mergeAccountsUnionFind(accounts);
// };





var accountsMerge = function (accounts) {
    const parents = {};
    const email2name = {};

    const find = (x) => {
        if (parents[x] !== x) {
            parents[x] = find(parents[x]);
        }

        return parents[x];
    };

    const union = (x, y) => {
        parents[find(x)] = find(y);
    };

    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name;
            union(email, emails[0]);
        }
    }

    const emails = {};
    for (const email of Object.keys(parents)) {
        const parent = find(email);
        if (parent in emails) {
            emails[parent].push(email);
        } else {
            emails[parent] = [email];
        }
    }

    return Object.entries(emails).map(([email, x]) => [email2name[email], ...x.sort()]);
};


 





// 0: J



// 0: 'a', 'b', 'c'
//     0.   1.   2

// map[set] = Name

// 1: 'd', 'a'
//     3    4
// 2: 'f', 'h'


// 3: 'k'




// 1: J
// 2: M
// 3: J



    
//                 0

//          [1, 2, 3, 4, 5]


//         1 

//       [1, 2]


//         1

//         [1]

        
//           1
//          [1]






















// // Mistake

// function mergeAccount(accounts) {
//     let map = {};
    
//     for (let i = 0; i < accounts.length; i++) {
//         let indexItBelongs;
//         for (let j = 1; j < accounts[i].length; j++) {
//             if (map[accounts[i][j]] != undefined && indexItBelongs != i) {
//                 indexItBelongs = map[accounts[i][j]];
//                 break;
//             } else {
//                 map[accounts[i][j]] = i;
//             }
//         }
//         if (indexItBelongs != undefined && indexItBelongs != i) {
//             for (let j = 1; j < accounts[i].length; j++) {
//                 map[accounts[i][j]] = indexItBelongs;
//             }
//         }
//     }
    
//     // console.log(map);
//     let keys = Object.keys(map);
    
//     let nameMap = {};
//     for (let i = 0; i < keys.length; i++) {
//         let key = keys[i];
//         let value = map[key];
//         if (nameMap[value] == undefined) {
//             nameMap[value] = {
//                 name: accounts[value][0],
//                 accounts: []
//             }
//         }
//         nameMap[value].accounts.push(key);
//     }
    
//     // console.log(nameMap);
//     let nameMapKeys = Object.keys(nameMap);
//     let result = [];
//     for (let i = 0; i < nameMapKeys.length; i++) {
//         let key = nameMapKeys[i];
//         let value = nameMap[key];
//         let accounts = value.accounts.sort();
//         result[i] = [value.name, ...accounts];
//     }
//     return result;
// }


// // a -> 0

// // b -> 0

// // c -> 0

// // d -> 2

// // e -> 3









// // J -> {a, b}

// // J -> {c, a}

// // M -> {d}

// // J -> {e}


// // {}

// // a: { name: 'John', set: {a, b} }

// // b :  { name: 'John', set: {a, b} }


// //         {c, a}





// // d : M


// // e : J

