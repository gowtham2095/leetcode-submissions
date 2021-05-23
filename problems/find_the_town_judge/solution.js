/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */


// var findJudge = function(n, trust) {
//     if (trust.length == 0 && n == 1)
//         return 1;
//     let citizenMap = new Map();
//     let trustSomebodySet = new Set();
//     for (let edge of trust) {
//         let [one, two] = edge;
//         trustSomebodySet.add(one);
//         if (citizenMap.get(two) == undefined) { 
//             citizenMap.set(two, new Set());
//         }
//         let currentSet = citizenMap.get(two);
//         currentSet.add(one);
//     }
//     for (let entry of citizenMap) {
//         let [key, set] = entry;
//         if (set.size == n - 1 && !trustSomebodySet.has(key)) {
//             return key;
//         }
//     }
//     return -1;
// };


/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // Initialize array with 1..N
    // N + 1, so count is easier 
    const counts = new Array(N+1).fill(0);
    
    // Iterate through N people    
    for(let [i,j] of trust) {
        // If the person trusts somebody, then it does not meet requirement 1
        counts[i] -= 1
        
        // Count the people they trust
        counts[j] += 1
    }

    // If N-1 exists, then its the judge since the judge trusts no one except themselves
    // and everyone else trusts the judge, then its N-1
    for(let i = 1; i < counts.length; i++) {
        if ((N-1) === counts[i]) {
            return i;
        }
    }
    
    return -1
};







// 1, 2

// [1,3] 

// [2,3]


// [1,3],[2,3],[3,1]


// [[1,2],[2,3]]



// 1 -> 2 -> 3

// [1,3],[1,4],[2,3],[2,4],[4,3]

// 1, 2, 3, 4

// 3: 

// 1 -> 3


// 1 -> 4

