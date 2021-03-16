/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let set1 = new Set();
    for (let i = 0; i < arr1.length; i++) {
        set1.add(arr1[i]);
    }
    
    let set2 = new Set();
    for (let i = 0; i < arr2.length; i++) {
        if (set1.has(arr2[i])) {
            set2.add(arr2[i]);
        }
    }
    
    let result = [];
    for (let i = 0; i < arr3.length; i++) {
        if (set2.has(arr3[i])){
            result.push(arr3[i]);
        }
    }
    
    return result;
    
    
};


// [1, 2, 3, 4, 5] - new set


// [1, 2, 5,7, 9]




// [1, 3, 4, 5, 8]