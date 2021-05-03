/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
function findBinaryString(num) {
    let s = '';
    while(num) {
        let rem = num % 2;
        num = Math.floor(num/2);
        s = rem + s;
    }
    return s;
}

var queryString = function(S, N) {
    for(let i = 1; i <= N; i++) {
        let binaryNumber = findBinaryString(i);
        if (S.indexOf(binaryNumber) == -1)
            return false;
    }
    return true;
};



// 1 - 'N'
    
    
//     8 
//     4 - 0
//     2 - 0
//     1 -0