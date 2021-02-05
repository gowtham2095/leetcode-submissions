/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let joinedArrayMap = {};
    
    arr1.forEach((element) => {
        joinedArrayMap[element] = 1;
    });
    
    arr2.forEach((element) => {
        if (joinedArrayMap[element])
            joinedArrayMap[element]++;
    });
    
    arr3.forEach((element) => {
        if (joinedArrayMap[element] > 1)
            joinedArrayMap[element]++;
    });
    
    let result = [];
    
    Object.keys(joinedArrayMap).forEach((key) => {
        if (joinedArrayMap[key] === 3) {
            result.push(key);
        }
    });
    
    return result;
};