/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    let indexMapOfB = {};
    B.forEach((element, index) => {
        indexMapOfB[element] = index;
    });
    
    for (let i = 0; i < A.length; i++) {
        let currentElement = A[i];
        A[i] = indexMapOfB[currentElement];
    }
    
    return A;
};