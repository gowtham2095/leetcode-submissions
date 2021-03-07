/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    // let str = A.join('');
    // let numberOfArray = Number(str);
    // let finalNumber = numberOfArray + K;
    // finalNumber = String(finalNumber)
    // return finalNumber.split('')
    
    let givenKArray = String(K).split('');
    let kAsArray = givenKArray.map((ele) => Number(ele)) 
    kAsArray.reverse();
    
    A.reverse();
    let carry = 0;
    var i;
    for(i = 0; i < A.length; i++) {
        A[i] = A[i] + carry;
        if ( i < kAsArray.length) {
            A[i] = A[i] + kAsArray[i] 
        }
        
        if (A[i] >= 10) {
            carry = 1;
            A[i] = A[i] % 10;
        } else {
            carry = 0;
        }
    }
    
    for (let j = i; j < kAsArray.length; j++) 
    {
        let rowSum = kAsArray[j] + carry;
        if (rowSum >= 10) {
            carry = 1;
            rowSum = rowSum % 10;
        } else {
            carry = 0;
        }
        A.push(rowSum);     
    }
    
    if (carry) {
        A.push(carry)
    }
    return A.reverse();
};