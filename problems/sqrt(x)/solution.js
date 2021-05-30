/**
 * @param {number} x
 * @return {number}
 */



function findSqrt(x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (middle * middle == x) {
            return middle
        }
        else if (middle * middle > x) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return left - 1;
}

var mySqrt = function(x) {
    return findSqrt(x);
};



// 2 3

// 8



// 4 


// 16 


// 0 4




