/**
 * @param {number} x
 * @return {number}
 */



function findSqrt(x) {
    let left = 1;
    let right = x + 1;
    
    while (left < right) {
        let middle = left + Math.floor((right - left)/2);
        
        if (middle * middle > x)
            right = middle;
        else 
            left = middle + 1;
    }
    return left - 1;
}

var mySqrt = function(x) {
    return findSqrt(x);
};

