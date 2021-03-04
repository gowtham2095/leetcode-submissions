/**
 * @param {number[]} A
 * @return {number}
 */
var largestUniqueNumber = function(A) {
    
    let myMap = {}
    
    A.forEach((ele) => {
       if (!myMap[ele]) {
         myMap[ele] = 1;  
       } else {
            myMap[ele]++;
       }
    });
    let max = -Infinity;
    Object.keys(myMap).forEach((key) => {
       if (myMap[key] ===1 && Number(key) > max) {
           max = Number(key);
       }
    });
    
    return max === -Infinity ? -1 : max;
};