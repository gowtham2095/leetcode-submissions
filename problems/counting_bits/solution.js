/**
 * @param {number} num
 * @return {number[]}
 */


function getBinaryCount(num) {
    let count = 0;
    while(num) {
        let rem = num % 2;
        if (rem == 1)
            count++;
        num = Math.floor(num/2);
    }
    return count;
}

var countBits = function(num) {
    let result = [];
    for(let i = 0; i <= num; i++) {
        result[i] = getBinaryCount(i);
    }
    return result;
};




