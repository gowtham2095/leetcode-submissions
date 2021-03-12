/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */


// 1) sort the logs based on time
// 2) Form a map of each element to a unique set it belongs
// 3) iterate through logs and perform set union 
// 4 ) make sure every element added is mapped to this set instead of previous set
// 4) And after doing union to a set check if the set size == N
// 5) If the size == N then the set has been formed and the current timestamp is the earliest
// 6) If the logs loop has terminated then return -1

//
// map = {
//     0: set1
//     1: set1
//     2: set3
//     3: set4
//     4: set4
//     5: set6
// }


function unionSet(setA, setB, mapToSets) {
    for (let ele of setB) {
        setA.add(ele);
        mapToSets.set(ele, setA);
    }
}

var earliestAcq = function(logs, N) {
    logs.sort((a,b) => Number(a[0]) - Number(b[0]))
    let mapToSets = new Map();
    let i = 0;
    while(i < N) {
        let set = new Set();
        set.add(i);
        mapToSets.set(i, set);
        i++;
    }
    for (let j = 0; j < logs.length; j++) {
        let currentLog = logs[j];
        let firstEle = currentLog[1];
        let secondEle = currentLog[2];
        
        let setA = mapToSets.get(firstEle);
        let setB = mapToSets.get(secondEle);
        if (setA != setB) {
            unionSet(setA, setB, mapToSets);
            if (setA.size === N) {
                return currentLog[0];
            }
        }
    }
    return -1;
};




