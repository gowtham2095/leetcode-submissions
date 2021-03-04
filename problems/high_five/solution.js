/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let map = new Map();
    let resultArr = [];
    let averageScoreMap = new Map();
    items.forEach((item) => {
        if (!map.has(item[0])) {
            map.set(item[0], []);
        }
        let arr = map.get(item[0]);
        arr.push(item[1]);
    });
    
    for (let key of map.keys()) {
        let arr = map.get(key);
        arr.sort((a, b) => b - a);
        let sum = arr.slice(0, 5).reduce((acc, ele) => acc + ele);
        sum = Math.floor(sum/5);
        resultArr.push([key, sum]);
    }
    
    return resultArr.sort((a, b) => a[0] - b[0]);
    
};