/**
 * @param {number[]} arr
 * @return {number[]}
 */



function bestSwap(arr) {
   
    if (arr.length == 1) {
        return arr;
    }
    
    for (let i = arr.length - 2; i >= 0; i--) {
        let max = -Infinity;
        let maxIndex = -1;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > max && arr[j] < arr[i]) {
                max = arr[j];
                maxIndex = j;
            }
        }
        if (max != -Infinity) {
            // perform swap
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
            return arr;
        }
    }
    return arr;
}

var prevPermOpt1 = function(arr) {
    return bestSwap(arr);
};





// 1, 9, 4, 6, 7




// 1, 




// [3,2,1]


// 3, 2, 2


// 2 3 2


// 3, 2, 1


// 3, 1, 2


// 3 1 2


// [1,1,5]



// [1,9,4,6,3]


// 1, 9, 4, 6, 3










// 1, 6, 8, 3, 4





   


// not bigger than the current Number but the closest

