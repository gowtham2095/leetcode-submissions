/**
 * @param {number} num
 * @return {number}
 */

function findMaxCombi(num) {
    let numStr = num + '';
    let numList = numStr.split('').map((num) => Number(num));
    
    let maxIndex;
    for (let i = 0; i < numList.length; i ++) {
        maxIndex = i;
        for (let j = numList.length; j > i; j--) {
            if (numList[j] > numList[maxIndex]) {
                maxIndex = j;
            }
        }
        if (maxIndex != i) {
            let temp = numList[maxIndex];
            numList[maxIndex] = numList[i];
            numList[i] = temp;
            return Number(numList.join(''));
        }
    }
    return Number(numList.join(''));
}

var maximumSwap = function(num) {
    return findMaxCombi(num);
};


9193

// 2736



// 7236


// 7236

// 9973



// 2490




// 9938

// 9983


// brute force is for each digit look if there is any nymber greater than it starting from 0th index





// 9, 9, 3, 8

// 2, 7, 3, 6


// 2, 7, 3, 6 