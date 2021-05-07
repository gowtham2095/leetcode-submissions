/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


function findKthMissing(arr, k) {
    let cursor = 0;
    let totalMissed = 0;
    for (let i = 0; i < arr.length; i++) {
        let nextPos = arr[i];
        if (nextPos - cursor - 1 + totalMissed < k) {
            totalMissed += nextPos - cursor - 1;
        } else {
            return cursor + (k - totalMissed);
        }
        cursor = nextPos;
    }
    return cursor + k - totalMissed;
}

var findKthPositive = function(arr, k) {
    return findKthMissing(arr, k);
};



[5, 6, 7, 8, 9]
9

// totalMissed = 3
// 7 - 4

// 7 + 

// nextPos 

// 2, 3, 4, 7, 11
// 0, 12

// 0, 12
    
// 1 
    
    
//     nextPos - currPos > totalMissed + (k - totalMissed)
    
    
//     // if
    
//     (nextPos - currentpos) + totalMissed < k
    
//         totalMissed = nextPos - currentPos;
    
//     // else 
    
//         currentPos + (k - totalMissed)
    
    
    
    
    
    
//     currPos + totalMissed